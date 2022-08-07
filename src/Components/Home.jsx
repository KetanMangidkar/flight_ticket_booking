import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import React from "react";

function Home() {
  return (
    <div className="form">
      <div>
        <FormControl>
          <FormLabel>From</FormLabel>
          <Select placeholder="Select country">
            <option>United Arab Emirates</option>
            <option>Nigeria</option>
          </Select>
        </FormControl>
      </div>
      <br />
      <div>
        <FormControl>
          <FormLabel>To</FormLabel>
          <Select placeholder="Select country">
            <option>United Arab Emirates</option>
            <option>Nigeria</option>
          </Select>
        </FormControl>
      </div>
      <br />
      <div>
        <Input
          placeholder="Select Date and Time"
          size="md"
          type="datetime-local"
        />
      </div>
      <div>
        <Button colorScheme="blue" marginTop={"1rem"}>Submit</Button>
      </div>
    </div>
  );
}

export default Home;
