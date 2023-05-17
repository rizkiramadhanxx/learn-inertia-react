import React, { useState } from "react";
import {
    Box,
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
} from "@chakra-ui/react";

const Test = () => {
    return (
        <Box>
            <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
                <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
        </Box>
    );
};

export default Test;
