# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh





Build A Currency Converter in React JS | Best Beginner React JS Project
![](![alt text](<My Currency Converter.PNG>))


Are you new to React JS and looking for a project to enhance your skills? Building a currency converter using React JS and CSS is an excellent way to do just that. This project reinforces fundamental concepts like components, state management, and API integration, while also providing a practical and rewarding application.

In this blog post, I’ll guide you through building a Currency Converter using React JS and pure CSS. In this currency converter, users can input an amount, choose the currencies for conversion, and click a button to get the exchange rate.

Additionally, the converter will display flags representing the currency codes,
and users will be able to switch the currencies by clicking a swap button.

Why Build a Currency Converter in React JS?
By building this currency converter project using React js and CSS, you can gain the following skills:

ReactJS Fundamentals: You’ll get hands-on experience with React components, state management, and hooks.
API Integration: Learn how to interact with web services, handle asynchronous operations, and manage data fetching in React.
CSS Skills: Learn how to create a responsive and visually appealing UI without relying on pre-built components.
Practical Application: This project provides a tangible result that you can showcase in your portfolio or use in real-life scenarios.
and users will be able to switch the currencies by clicking a swap button.

Why Build a Currency Converter in React JS?
By building this currency converter project using React js and CSS, you can gain the following skills:

ReactJS Fundamentals: You’ll get hands-on experience with React components, state management, and hooks.
API Integration: Learn how to interact with web services, handle asynchronous operations, and manage data fetching in React.
CSS Skills: Learn how to create a responsive and visually appealing UI without relying on pre-built components.
Practical Application: This project provides a tangible result that you can showcase in your portfolio or use in real-life scenarios.
Open this folder in your VS Code editor.
Initialize the Project:

Open your terminal by pressing Ctrl + J and then use Vite to create a new React app with this command:

npm create vite@latest ./ -- --template react
Install necessary dependencies and start the development server:

npm install
npm run dev



If your project is up and running in your browser, congratulations! You’ve If your project is up and running in your browser, congratulations! You’ve successfully set up your project. Now, let’s move on to the next step modifying folders and files.

Modify folder and CSS Files:

Remove the default assets folder and App.css file.
Download the bg.png image and place it inside the public folder.
Replace the content of index.css with the provided code.
Creating the Components
Within the src directory of your project, organize your files by creating a “components” folder. Inside the components folder, create the following files:

ConverterForm.jsx
CurrencySelect.jsx
Adding the Codes
Add the respective code to each newly created file. These files define the layout and functionality of the currency converter.

In components/ConverterForm.jsx, add the code for rendering the converter form, and fetch the exchange rate with an API call.
Remember to paste your API key into the API_KEY variable within the getExchangeRate() function. For security, consider storing your API key in a .env file in your project’s root directory. You can get a free API key from the ExchangeRate-API website.

In components/CurrencySelect.jsx, add the code for rendering the currency selection dropdowns.
That’s it! If you’ve completed all the steps, you should now see your currency converter project in your browser. You can interact with it by entering an amount, selecting currencies, and clicking the swap button to switch between them.

Conclusion and final words
Building a currency converter with React JS and CSS is a rewarding project for beginners. It enhances your knowledge of React components, state management, and hooks, while also giving you hands-on experience with API integration and CSS styling.

Keep experimenting with additional features like historical exchange rates or different themes to continue learning and improving your skills.
If you encounter any issues, feel free to download the source code files for this currency converter project for free by clicking the “Download” button. Be sure to read the README.md file included in the zip for detailed instructions on how to set up and run the project.

