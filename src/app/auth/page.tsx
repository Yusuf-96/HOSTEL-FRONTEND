import { Button, Checkbox, Input } from "@nextui-org/react";
import React from "react";

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center px-6 ">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-900 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
          </h1>
          <form className="space-y-4 md:space-y-6" action="">
            <Input
              type="text"
              variant="underlined"
              label="Username"
              size="sm"
              isClearable
            />
            <Input
              type="password"
              variant="underlined"
              label="Password"
              size="sm"
              isClearable
            />
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <Checkbox  size="sm">
                    Remember me
                  </Checkbox>
                </div>
              </div>
              <a
                href="#"
                className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Forgot password?
              </a>
            </div>

            <Button
              type="submit"
              color="primary"
              variant="bordered"
              className="w-full"
            >
              Sign in
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
