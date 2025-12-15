const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-[50vh] w-full">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-gray-200 dark:border-gray-700 rounded-full"></div>
        
        <div className="w-12 h-12 border-4 border-red-600 rounded-full animate-spin absolute top-0 left-0 border-t-transparent"></div>
      </div>
      
      <span className="ml-4 text-gray-500 dark:text-gray-400 font-medium animate-pulse">
        Loading...
      </span>
    </div>
  );
};

export default Loading;