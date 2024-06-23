"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "../ui/use-toast";

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

export default function Register() {
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Name: "",
      Email: "",
      Phone: "",
    },
  });

  const onSubmit = async (data:any) => {
    const formData = new FormData();
    formData.append("Name", data.Name);
    formData.append("Email", data.Email);
    formData.append("Phone", data.Phone);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwpjRYtpTUBshiVI5RkcfFkXWrJQJ0dXBxpF64n1POwOK3w1Wi-NHjXaeztrmj8G0Sw/exec",
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
          cache: "no-cache",
        }
      );
      toast({
        title: "Submitted!",
        description: "Your form has been submitted successfully.",
        style: { 
          backgroundColor:'#fff'
        },
      });
      form.reset();
      setIsDialogOpen(false); // Close the dialog after submission
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "There was an error submitting the form.",
      });
    }
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button
          className="w-fit md:w-auto bg-[#F49426] text-black register hover:bg-white register"
          onClick={() => setIsDialogOpen(true)}
        >
          Register Now
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <h1 className="text-center text-white text-2xl mb-6 font-semibold">
            Register Now
          </h1>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 text-white">
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
            <DialogFooter className="hover:text-white">
              <Button type="submit" className="bg-white text-black">
                Save changes
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
