import React from "react";

import { Button, Rating } from "flowbite-react";
function Demo() {
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-6">
      <div>
        <div className="flex flex-wrap gap-2">
          <div>
            <Button>Default</Button>
          </div>
          <div>
            <Button color="gray">Gray</Button>
          </div>
          <div>
            <Button color="dark">Dark</Button>
          </div>
          <div>
            <Button color="light">Light</Button>
          </div>
          <div>
            <Button color="success">Success</Button>
          </div>
          <div>
            <Button color="failure">Failure</Button>
          </div>
          <div>
            <Button color="warning">Warning</Button>
          </div>
          <div>
            <Button color="purple">Purple</Button>
          </div>
        </div>
      </div>
      <div className="">
        <Rating>
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star filled={false} />
          <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
            4.95 out of 5
          </p>
        </Rating>
      </div>
    </div>
  );
}

export default Demo;
