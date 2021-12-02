import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function AddProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>
    axios
      .post("http://localhost:8080/api/post", data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
        console.log(data);
      });

  return (
    <div className="flex-child">
      <div>
        <h1></h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            id="filled-basic"
            label="Name"
            variant="filled"
            {...register("name", { required: true })}
          />
          {errors.exampleRequired && <p>This field is required</p>}

          <TextField
            id="filled-basic"
            type="number"
            label="Price"
            variant="filled"
            {...register("price", { required: true })}
          />
          {errors.exampleRequired && <p>This field is required</p>}

          <TextField
            id="filled-basic"
            label="Image"
            variant="filled"
            {...register("image", { required: true })}
          />
          {errors.exampleRequired && <p>This field is required</p>}

          <TextField
            id="filled-basic"
            label="Description"
            variant="filled"
            {...register("description", { required: true })}
          />
          {errors.exampleRequired && <p>This field is required</p>}

          <TextField
            id="filled-basic"
            label="Type"
            variant="filled"
            {...register("type", { required: true })}
          />
          {errors.exampleRequired && <p>This field is required</p>}

          <TextField
            type="number"
            id="filled-basic"
            label="stock"
            variant="filled"
            {...register("stock", { required: true })}
          />
          {errors.exampleRequired && <p>This field is required</p>}
          <div>
            <Button variant="outlined" type="submit">
              Add Item
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
