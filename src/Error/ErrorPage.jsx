const ErrorPage = () => {
  return (
    <div>
      <div className="flex items-center justify-center w-full h-screen bg-gray-100">
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-4xl font-bold text-red-500">404</p>
          <p className="text-xl font-semibold text-gray-500">Page not found</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
