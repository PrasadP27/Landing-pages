import CustomButton from "./ui/CustomButton";
import Seprator from "./ui/Seprator";

function Footer() {
  return (
    <footer className="w-full text-center">
      <div className="max-width py-8">
        <div className="flex items-center justify-between py-12">
          <p className="text-lightgray">Prasad Panchal @ 2026</p>

          <CustomButton data="Order now" type="dark" />
        </div>

        <div className="mb-20">
          <Seprator />
        </div>
        <img src="/src/assets/VERTX.png" alt="" />
      </div>
    </footer>
  );
}

export default Footer;
