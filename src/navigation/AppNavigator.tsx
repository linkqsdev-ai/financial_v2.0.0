import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DashboardScreen from '../screens/DashboardScreen';
import CashFlowScreen from '../screens/CashFlowScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import ProfileSettingsScreen from '../screens/ProfileSettingsScreen';
import AssetsPortfolioScreen from '../screens/AssetsPortfolioScreen';
import FinancialGoalsScreen from '../screens/FinancialGoalsScreen';
import AddAssetSourceScreen from '../screens/AddAssetSourceScreen';
import ZerodhaImportScreen from '../screens/ZerodhaImportScreen';
import ReviewConfirmAssetsScreen from '../screens/ReviewConfirmAssetsScreen';
import AddManualAssetScreen from '../screens/AddManualAssetScreen';
import CreateGoalScreen from '../screens/CreateGoalScreen';

import ExpenseDashboardScreen from '../screens/ExpenseDashboardScreen';
import ActivityListScreen from '../screens/ActivityListScreen';
import AddTransactionScreen from '../screens/AddTransactionScreen';
import VisualReportsScreen from '../screens/VisualReportsScreen';
import ManageCategoriesScreen from '../screens/ManageCategoriesScreen';
import CreateNewCategoryScreen from '../screens/CreateNewCategoryScreen';
import AddRecurringExpenseScreen from '../screens/AddRecurringExpenseScreen';
import PremiumSubscriptionScreen from '../screens/PremiumSubscriptionScreen';
import AccountsWalletsScreen from '../screens/AccountsWalletsScreen';
import SubscriptionsRecurringBillsScreen from '../screens/SubscriptionsRecurringBillsScreen';

import { BottomNav } from '../components/ui/BottomNav';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      {...{
        tabBar: (props: any) => <BottomNav {...props} />,
        screenOptions: { headerShown: false },
        sceneContainerStyle: { flex: 1, overflow: 'hidden' }
      } as any}
    >
      <Tab.Screen name="Home" component={DashboardScreen} />
      <Tab.Screen name="Assets" component={AssetsPortfolioScreen} />
      <Tab.Screen name="CashFlow" component={CashFlowScreen} />
      <Tab.Screen name="Goals" component={FinancialGoalsScreen} />
      <Tab.Screen name="Profile" component={ProfileSettingsScreen} />
    </Tab.Navigator>
  );
}

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { flex: 1, overflow: 'hidden' }
        }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="AddAssetSource" component={AddAssetSourceScreen} />
        <Stack.Screen name="ZerodhaImport" component={ZerodhaImportScreen} />
        <Stack.Screen name="ReviewConfirmAssets" component={ReviewConfirmAssetsScreen} />
        <Stack.Screen name="AddManualAsset" component={AddManualAssetScreen} />
        <Stack.Screen name="CreateGoal" component={CreateGoalScreen} />
        
        <Stack.Screen name="ExpenseDashboard" component={ExpenseDashboardScreen} />
        <Stack.Screen name="ActivityList" component={ActivityListScreen} />
        <Stack.Screen name="AddTransaction" component={AddTransactionScreen} />
        <Stack.Screen name="VisualReports" component={VisualReportsScreen} />
        <Stack.Screen name="ManageCategories" component={ManageCategoriesScreen} />
        <Stack.Screen name="CreateNewCategory" component={CreateNewCategoryScreen} />
        <Stack.Screen name="AddRecurringExpense" component={AddRecurringExpenseScreen} />
        <Stack.Screen name="PremiumSubscription" component={PremiumSubscriptionScreen} />
        <Stack.Screen name="AccountsWallets" component={AccountsWalletsScreen} />
        <Stack.Screen name="SubscriptionsRecurringBills" component={SubscriptionsRecurringBillsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

