import { useEffect } from "react";
import { useSearchParams } from "react-router";
import toast from "react-hot-toast";

export default function PaymentSuccess() {
    const [params] = useSearchParams();
    const sessionId = params.get("session_id");

    useEffect(() => {
        if (sessionId) {
            toast.success("🎉 Payment successful!");
        }
    }, [sessionId]);

    return (
        <div className="h-screen flex items-center justify-center flex-col gap-4">
            <h2 className="text-2xl font-bold text-green-600">Payment Successful!</h2>
            <p>Thank you for upgrading your membership.</p>
        </div>
    );
}
