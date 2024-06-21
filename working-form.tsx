"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";

const schema = z.object({
  Name: z.string().min(1, "Name is required"),
  Email: z.string().email("Invalid email address"),
  Phone: z.string().min(1, "Phone is required"),
});

export default function ProfileForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data:any) => {
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
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <h1>Contact Me form</h1>
      <h2>
        This demonstrates how to send data from a website form to Google sheet in React or Vanilla JS
      </h2>
      <div>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Your Name"
            {...register("Name")}
            type="text"
          />
          {errors.Name && <p>{errors.Name.message}</p>}

          <input
            placeholder="Your Email"
            {...register("Email")}
            type="text"
          />
          {errors.Email && <p>{errors.Email.message}</p>}

          <input
            placeholder="Your Phone"
            {...register("Phone")}
            type="number"
          />
          {errors.Phone && <p>{errors.Phone.message}</p>}

          <Button type="submit">Join Waitlist</Button>
        </form>
      </div>
    </div>
  );
}
