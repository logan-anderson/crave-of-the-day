export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-lg  lg:max-w-5xl w-full h-full flex justify-center flex-col mt-5">
      {children}
    </div>
  );
}
