# React Native Banking App UI

A modern, sleek banking application UI built with React Native and Expo, featuring a beautiful dark theme with smooth animations and intuitive navigation.

## 📱 Screenshots

The app includes two main screens:
- **Home Screen**: Displays account cards, expense tracking, and recent transactions
- **Notifications Screen**: Shows payment notifications, travel offers, and security alerts

## ✨ Features

- 🎨 Modern dark theme UI design
- 💳 Multiple card management (Debit & Virtual cards)
- 📊 Visual expense tracking with gradient bars
- 📝 Transaction history with avatars and icons
- 🔔 Detailed notifications with categorization
- 🧭 Bottom tab navigation
- 📱 Fully responsive design

## 🚀 Technologies

- **React Native** - Cross-platform mobile framework
- **Expo** - Development platform and tooling
- **React Navigation** - Navigation library for routing
- **Expo Vector Icons** - Icon sets for UI elements

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/DARK2021/React-Native-UI-Test-Banking-Screens.git
cd React-Native-UI-Test-Banking-Screens
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Run on your preferred platform:
- Press `a` for Android
- Press `i` for iOS simulator
- Scan QR code with Expo Go app on your device

## 📱 Running on Android Emulator

If you have Android Studio installed:

1. Start your Android emulator
2. Run:
```bash
npm start
```
3. Press `a` to open on Android

## 🎯 App Structure

```
rn_bank_app/
├── App.js                      # Main app entry with navigation
├── screens/
│   ├── HomeScreen.js          # Home screen with cards & transactions
│   └── NotificationsScreen.js # Notifications screen
├── package.json               # Dependencies and scripts
└── README.md                  # This file
```

## 🎨 Key Components

### Home Screen
- **Account Cards**: Orange debit card and gray virtual card with Mastercard-style logos
- **Categories**: Quick access to Travel, Delivery, Bonuses, and Support
- **Expense Tracker**: Visual bar chart showing monthly expenses
- **Transaction List**: Today and Yesterday transactions with avatars

### Notifications Screen
- **Tab Navigation**: All, Payments, System, Delivery, Travel
- **Notification Cards**: Grouped by date with icons and details
- **Transaction Details**: Shows amount, balance, and card information

## 🛠️ Customization

### Colors
Main theme colors are defined at the top of each screen file:
```javascript
const ORANGE = '#FF7A1A';
```

### Navigation
Navigation is configured in `App.js` using React Navigation's Stack Navigator.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Developer

Created with ❤️ for learning and demonstration purposes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show your support

Give a ⭐️ if you like this project!
