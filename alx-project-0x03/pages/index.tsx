import Layout from "@/components/layouts/Layout"; 
import Button from "@/components/common/Button";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen p-6">
        <h1 className="text-3xl font-bold mb-6">Welcome to ALX Project 0x03</h1>
        <Button 
          buttonLabel="Click Me"
          buttonBackgroundColor="green"
          buttonSize="text-lg"
          action={() => alert("Button clicked!")}
/>

      </div>
    </Layout>
  );
}
