const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto py-10 flex justify-between">
        <div className="text-left">
          <a href="/policies" className="text-xs text-black mr-4">Policies</a>
          <a href="/terms" className="text-xs text-black mr-4">| Terms of Service</a>
          <a href="/contact" className="text-xs text-black">| Contact Us</a>
        </div>

        <div className="text-right">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-xs text-black mr-4">
            <img src="/facebook-logo.png" alt="Facebook" className="h-4 w-4 inline" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-xs text-black">
            <img src="/instagram-logo.png" alt="Instagram" className="h-4 w-4 inline" />
          </a>
        </div>
      </div>
      <div className="mx-auto">
        <p className="text-center text-xs text-black">
          &copy; 2024 Alexa Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
