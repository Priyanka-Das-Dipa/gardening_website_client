/* eslint-disable import/order */
/* eslint-disable padding-line-between-statements */
/* eslint-disable prettier/prettier */
import { useLocalUser } from "@/src/context/user.provider";
import { useMakePaymentMutation } from "@/src/redux/features/auth/auth.api";
import { Tpost } from "@/src/types";
import {
  Button,
  Card,
  Modal,
  ModalContent,
  ModalFooter,
  useDisclosure,
} from "@heroui/react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";
import { toast } from "sonner";
import Swal from "sweetalert2";

const CheckoutForm = ({
  userInfo,
  post,
  btnClass,
}: {
  btnClass?: string;
  post?: Tpost[];
  userInfo: { name: string | undefined; email: string | undefined };
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [makePayment] = useMakePaymentMutation();
  const { user } = useLocalUser();

  const isUpVotesTrue = post?.some(
    (item: Tpost) => item.upVotes > item?.downVotes
  );
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: React.FormEvent) => {
    const toastId = toast.loading("Data Processing...");
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement!,
    });
    if (error) {
      toast.error(error.message, { id: toastId, duration: 4000 });
    } else {
      // send response to the server
      const response = await fetch(
        "http://localhost:5000/api/user/confirm-payment",
        {
          // const response = await fetch("http://localhost:5000/api/user/confirm-payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ paymentId: paymentMethod.id, price: 40 }),
        }
      );
      const paymentResult = await response.json();

      if (paymentResult.success) {
        toast.success(paymentResult.message, { id: toastId });
        const paymentInfo = {
          ...userInfo,
          transactionId: paymentResult?.data?.id,
          paymentTime: paymentResult?.data?.created,
          userId: user?._id,
        };
        const res = (await makePayment(paymentInfo)) as any;

        if (res?.error) {
          toast.error(
            res?.error?.message ||
              res?.error?.data?.message ||
              "Something went wrong",
            { id: toastId, duration: 4000 }
          );
        } else {
          toast.success(res?.date?.message, { id: toastId, duration: 4000 });
          Swal.fire({
            title: "Congratulations Your now verified memeber of NextLeaf",
            icon: "success",
            showCancelButton: true,
            denyButtonText: `ok`,
          });
        }
      } else if (!paymentResult.success) {
        toast.error(paymentResult?.message, { id: toastId, duration: 4000 });
      } else {
        toast.error(paymentResult?.error?.message, {
          id: toastId,
          duration: 4000,
        });
      }
    }
  };

  return (
    <div>
      <Button
        className={btnClass && btnClass}
        isDisabled={!isUpVotesTrue}
        onPress={onOpen}
      >
        Verifiy
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <Card className="p-6 text-center bg-white rounded-lg shadow-lg">
                <h2 className="text-center md:text-lg my-3 font-semibold font-roboto_slab">
                  You have to pay $40
                </h2>
                <form onSubmit={handleSubmit}>
                  <CardElement />
                  <Button
                    className="w-full mt-4"
                    disabled={!stripe}
                    size="md"
                    type="submit"
                    onPress={onClose}
                  >
                    Pay & Get Verified
                  </Button>
                </form>
              </Card>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" size="sm" onPress={onClose}>
                  Cancel
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CheckoutForm;
