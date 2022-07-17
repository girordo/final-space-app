import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Header />
      <div className="min-h-screen flex items-center">
        <h1 className="text-6xl font-bold">Você chegou ao espaço final</h1>
      </div>
      <Footer />
    </div>
  );
};
