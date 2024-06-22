"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useToast } from "./ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  Name: z.string().min(5, {
    message: "Name must be at least 5 characters",
  }),
  Email: z
    .string()
    .email({
      message: "Invalid email address",
    })
    .min(1, {
      message: "Email is required",
    }),
  Phone: z
    .string()
    .min(10, {
      message: "Phone number must be exactly 10 digits",
    })
    .max(10, {
      message: "Phone number must be exactly 10 digits",
    })
    .min(1, {
      message: "Phone number is required",
    }),
});

export default function ProfileForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Name: "",
      Email: "",
      Phone: "",
    },
  });
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const formData = new FormData();
    formData.append("Name", data.Name);
    formData.append("Email", data.Email);
    formData.append("Phone", data.Phone);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwpjRYtpTUBshiVI5RkcfFkXWrJQJ0dXBxpF64n1POwOK3w1Wi-NHjXaeztrmj8G0Sw/exec",
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
          cache: "no-cache",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      console.log(result);
      toast({
        title: "Submitted!",
        description: "Your form has been submitted successfully.",
      });
      form.reset();
      alert("Submitted!");
    } catch (error) {
      console.error(error);
    }
    console.log(data);
  };
  return (
    <div className=" flex items-center justify-center text-white">
      <div className=" p-8 rounded shadow-lg w-full sm:w-96">
        <h1 className="text-center text-2xl mb-6 font-semibold">Register Now</h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="Name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter your Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Dyer" {...field} />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter your Email</FormLabel>
                  <FormControl>
                    <Input placeholder="john.dyer@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="9999888867" {...field} />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            {/* <div className="text-center">
            <DialogFooter>
              <Button
                className=""
                type="submit"
                // onClick={() => {
                  //   toast({
                    //     variant: "destructive",
                    //     description: "Thanks for Registering!",
                    //   })
                    // }}
                    >
                Submit
              </Button>
                </DialogFooter>
            </div> */}
          </form>
        </Form>
      </div>
    </div>
  );
}
