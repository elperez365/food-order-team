import React from "react";

const Loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div
        style={{ borderTopColor: "transparent" }}
        className="h-8 w-8 animate-spin rounded-full border-4 border-blue-200"
      ></div>
      <p className="ml-2">loading...</p>
    </div>
  );
};

export default Loading;
