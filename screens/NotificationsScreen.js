import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';

const ORANGE = '#FF7A1A';

function BottomTabBar({ navigation, active }) {
  const tabs = [
    { key: 'Home', icon: 'home' },
    { key: 'Payments', icon: 'arrow-forward-circle' },
    { key: 'History', icon: 'time-outline' },
    { key: 'Analytics', icon: 'pie-chart-outline' },
    { key: 'Chats', icon: 'chatbubble-ellipses-outline' },
  ];

  const handlePress = (tabKey) => {
    if (tabKey === 'Home') {
      navigation.navigate('Home');
    } else if (tabKey === 'History') {
      navigation.navigate('Notifications');
    }
  };

  return (
    <View style={styles.tabBar}>
      {tabs.map((tab) => {
        const focused = tab.key === active;
        return (
          <TouchableOpacity
            key={tab.key}
            style={styles.tabItem}
            onPress={() => handlePress(tab.key)}
          >
            <Ionicons
              name={tab.icon}
              size={24}
              color={focused ? ORANGE : '#FFFFFF'}
            />
            <Text style={[styles.tabLabel, focused && styles.tabLabelActive]}>
              {tab.key}
            </Text>
          </TouchableOpacity>
        );
      })}
      <View style={styles.homeIndicatorSpacer} />
    </View>
  );
}

function NotificationTab({ label, active }) {
  return (
    <View style={styles.notificationTabWrap}>
      <Text
        style={[
          styles.notificationTabText,
          active && styles.notificationTabTextActive,
        ]}
      >
        {label}
      </Text>
      {active && <View style={styles.notificationTabIndicator} />}
    </View>
  );
}

function NotificationItem({ title, subtitle, amount, balance, cardInfo, meta, positive, avatarUri, icon, iconBg }) {
  return (
    <View style={styles.notificationCard}>
      <View style={styles.notificationLeftIconWrap}>
        {avatarUri ? (
          <Image source={{ uri: avatarUri }} style={styles.notificationAvatar} />
        ) : (
          <View style={[styles.notificationIconCircle, iconBg && { backgroundColor: iconBg }]}>
            {icon ? (
              <Text style={styles.notificationIconText}>{icon}</Text>
            ) : (
              <MaterialIcons name="account-balance-wallet" size={20} color={ORANGE} />
            )}
          </View>
        )}
      </View>

      <View style={styles.notificationCenter}>
        <Text style={styles.notificationTitle}>{title}</Text>
        {amount && (
          <Text
            style={[
              styles.notificationAmount,
              positive ? styles.textPositive : styles.textNegative,
            ]}
          >
            {amount}
          </Text>
        )}
        {cardInfo && <Text style={styles.notificationCardInfo}>{cardInfo}</Text>}
        {balance && <Text style={styles.notificationBalance}>{balance}</Text>}
        {subtitle && <Text style={styles.notificationSubtitle}>{subtitle}</Text>}
        {meta && <Text style={styles.notificationMeta}>{meta}</Text>}
      </View>

      <View style={styles.notificationRightDotWrap}>
        <View style={styles.dot} />
      </View>
    </View>
  );
}

export default function NotificationsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.outerBackground} />

      <View style={styles.mainCard}>
        {/* Header */}
        <View style={styles.notificationsHeader}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={22} color="#FFFFFF" />
          </TouchableOpacity>

          <Text style={styles.notificationsTitle}>Notifications</Text>

          <TouchableOpacity style={styles.squareButton}>
            <Feather name="check-square" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        {/* Tabs */}
        <View style={styles.notificationTabsRow}>
          <NotificationTab label="All" active />
          <NotificationTab label="Payments" />
          <NotificationTab label="System" />
          <NotificationTab label="Delivery" />
          <NotificationTab label="Travel" />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.notificationsScroll}
        >
          <Text style={styles.dateHeader}>TODAY, 17 JUNE</Text>
          <NotificationItem
            title="Received from Anna"
            amount="+$110"
            positive
            cardInfo="Debit •• 4385"
            balance="$4,098.12"
            meta="17 June 2025, 17:49 · Payments"
            avatarUri="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
          />

          <Text style={styles.dateHeader}>YESTERDAY, 16 JUNE</Text>
          <NotificationItem
            title="See our limited offer!"
            subtitle="Would you like to visit new countries? Maybe it's your time!"
            meta="16 June 2025, 23:08 · Travel"
            icon="💧"
            iconBg="#D35400"
          />
          <NotificationItem
            title="Sent to •• 2041"
            amount="-$14.62"
            cardInfo="Debit •• 4385"
            balance="$3,987.5"
            meta="16 June 2025, 06:18· Payments"
            icon="↑"
            iconBg="#C1440E"
          />

          <Text style={styles.dateHeader}>24 MARCH, 2025</Text>
          <NotificationItem
            title="New login into account"
            subtitle="You have logged in from a new location: iOS 26.0.1 · 109.255.84.7 · Spain"
            meta="24 March 2025, 15:44 · Security"
            icon="🔒"
            iconBg="#C1440E"
          />
        </ScrollView>

        <BottomTabBar navigation={navigation} active="History" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#181818',
  },
  outerBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#181818',
  },
  mainCard: {
    flex: 1,
    backgroundColor: '#000000',
    marginTop: 8,
    marginHorizontal: 8,
    borderRadius: 32,
    overflow: 'hidden',
  },
  // bottom tab
  tabBar: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 4,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#1F1F1F',
    backgroundColor: '#000000',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tabItem: {
    alignItems: 'center',
    flex: 1,
  },
  tabLabel: {
    marginTop: 2,
    fontSize: 11,
    color: '#9E9E9E',
  },
  tabLabelActive: {
    color: ORANGE,
  },
  homeIndicatorSpacer: {
    height: 10,
  },

  notificationsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  backButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#111111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationsTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  squareButton: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#111111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationTabsRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 18,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#262626',
  },
  notificationTabWrap: {
    marginRight: 20,
    paddingBottom: 10,
    alignItems: 'center',
  },
  notificationTabText: {
    fontSize: 14,
    color: '#B8B8B8',
  },
  notificationTabTextActive: {
    color: ORANGE,
    fontWeight: '600',
  },
  notificationTabIndicator: {
    marginTop: 4,
    height: 2,
    borderRadius: 1,
    backgroundColor: ORANGE,
    alignSelf: 'stretch',
  },
  notificationsScroll: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
  },
  dateHeader: {
    fontSize: 12,
    color: '#7C7C7C',
    marginBottom: 8,
    marginTop: 24,
  },
  notificationCard: {
    backgroundColor: '#101010',
    borderRadius: 0,
    paddingVertical: 14,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 0,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#1A1A1A',
  },
  notificationLeftIconWrap: {
    marginRight: 10,
    marginTop: 2,
  },
  notificationIconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#191919',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  notificationIconText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  notificationCenter: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 15,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  notificationAmount: {
    marginTop: 2,
    fontSize: 16,
    fontWeight: '600',
  },
  textPositive: {
    color: ORANGE,
  },
  textNegative: {
    color: '#FF4E3B',
  },
  notificationSubtitle: {
    marginTop: 4,
    fontSize: 13,
    color: '#B7B7B7',
  },
  notificationCardInfo: {
    marginTop: 4,
    fontSize: 13,
    color: '#9E9E9E',
  },
  notificationBalance: {
    marginTop: 2,
    fontSize: 13,
    color: '#9E9E9E',
  },
  notificationMeta: {
    marginTop: 4,
    fontSize: 11,
    color: '#8B8B8B',
  },
  notificationRightDotWrap: {
    marginLeft: 8,
    marginTop: 4,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: ORANGE,
  },
});
