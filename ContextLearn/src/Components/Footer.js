const Footer = () => {
  return (
    <footer class="absolute bottom-0 right-0 left-0 bg-gray-800 text-white py-8">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="flex flex-wrap justify-between">
          <div class="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h2 class="text-lg font-semibold mb-4">Company Name</h2>
            <p class="text-gray-400">
              We provide top-notch services to help you reach your business
              goals.
            </p>
          </div>

          <div class="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h2 class="text-lg font-semibold mb-4">Quick Links</h2>
            <ul>
              <li class="mb-2">
                <a href="#" class="text-gray-400 hover:text-white transition">
                  About Us
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="text-gray-400 hover:text-white transition">
                  Services
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="text-gray-400 hover:text-white transition">
                  Contact
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="text-gray-400 hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div class="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h2 class="text-lg font-semibold mb-4">Contact Us</h2>
            <ul>
              <li class="mb-2 text-gray-400">Email: info@company.com</li>
              <li class="mb-2 text-gray-400">Phone: (123) 456-7890</li>
              <li class="mb-2 text-gray-400">
                Address: 1234 Street Name, City, Country
              </li>
            </ul>
          </div>

          <div class="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h2 class="text-lg font-semibold mb-4">Follow Us</h2>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-white transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.54 6.42a2.49 2.49 0 0 0-1.74-.7c-.58 0-1.14.23-1.56.65a2.21 2.21 0 0 0-.64 1.55c0 .17 0 .35.03.52-3.14-.1-6.16-1.5-8.23-3.57a2.25 2.25 0 0 0-.31 2.1 6.47 6.47 0 0 0-1.63-.54A2.27 2.27 0 0 0 4.8 7.1c0 .77.39 1.44.98 1.83a2.22 2.22 0 0 1-1.02-.28v.03c0 1.08.78 1.97 1.8 2.17a2.23 2.23 0 0 1-1.01.04 2.23 2.23 0 0 0 2.09 1.56 4.51 4.51 0 0 1-2.75.95 4.53 4.53 0 0 1-.53-.03A6.32 6.32 0 0 0 6.44 17c4.14 0 6.42-3.43 6.42-6.42v-.29a4.56 4.56 0 0 0 1.13-1.17 4.43 4.43 0 0 0 1.26-.34 9.06 9.06 0 0 1-2.3 2.11z" />
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.68 0H1.32C.6 0 0 .6 0 1.32v21.36C0 23.4.6 24 1.32 24h11.52v-9.33H9.29V11.1h3.55v-2.47c0-3.53 2.18-5.45 5.36-5.45 1.52 0 2.83.11 3.21.16v3.72h-2.2c-1.73 0-2.06.82-2.06 2.02v2.53h4.12l-.54 3.57h-3.57V24h6.97c.73 0 1.32-.6 1.32-1.32V1.32C24 .6 23.4 0 22.68 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
          <p>&copy; 2023 Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
