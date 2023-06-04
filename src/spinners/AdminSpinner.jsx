const AdminSpinner = () => {
  return (
    <div class="mx-auto animate-pulse mt-32 w-full rounded-md border border-blue-300 p-4 shadow">
      <div class="lg:flex justify-between lg:space-y-0 space-y-4">
        <div class="h-[150px] w-[290px] rounded-lg bg-slate-200"></div>
        <div class="h-[150px] w-[290px] rounded-lg bg-slate-200"></div>
        <div class="h-[150px] w-[290px] rounded-lg bg-slate-200"></div>
        <div class="h-[150px] w-[290px] rounded-lg bg-slate-200"></div>
      </div>
      <div class="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:px-32 lg:mt-20 mt-8">
        <div class="lg:h-96 h-52 lg:w-[500px] w-full rounded-lg bg-slate-200"></div>
        <div class="lg:h-96 h-52 lg:w-96 w-52 rounded-full bg-slate-200"></div>
      </div>
    </div>
  );
};

export default AdminSpinner;
