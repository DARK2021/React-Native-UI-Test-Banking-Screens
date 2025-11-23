import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Ionicons, Feather, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

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
    } else {
      // other tabs: no navigation yet
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

function Category({ icon, label }) {
  return (
    <View style={styles.categoryItem}>
      <View style={styles.categoryIconCircle}>
        <MaterialIcons name={icon} size={20} color={ORANGE} />
      </View>
      <Text style={styles.categoryLabel}>{label}</Text>
    </View>
  );
}

function TransactionCard({ name, subtitle, amount, time, avatarUri, icon }) {
  return (
    <View style={styles.transactionCard}>
      <View style={styles.transactionLeft}>
        <View style={styles.avatarWrap}>
          {avatarUri ? (
            <Image source={{ uri: avatarUri }} style={styles.avatarImage} />
          ) : icon ? (
            <View style={[styles.avatarImage, styles.iconPlaceholder]}>
              <Text style={styles.iconText}>{icon}</Text>
            </View>
          ) : (
            <View style={[styles.avatarImage, styles.avatarPlaceholder]} />
          )}
        </View>
        <View style={styles.transactionInfo}>
          <Text style={styles.transactionName}>{name}</Text>
          <View style={styles.transactionSubtitleRow}>
            <View style={styles.dot} />
            <Text style={styles.transactionSubtitle}>{subtitle}</Text>
          </View>
        </View>
      </View>

      <View style={styles.transactionRight}>
        <Text style={styles.transactionAmount}>{amount}</Text>
        <Text style={styles.transactionTime}>{time}</Text>
      </View>
    </View>
  );
}

function ExpensesBar() {
  return (
    <View style={styles.expensesBarContainer}>
      <View style={[styles.expensesSegment, { width: '28%', backgroundColor: ORANGE }]} />
      <View style={styles.expenseGap} />
      <View style={[styles.expensesSegment, { width: '26%', backgroundColor: '#FF8A1A' }]} />
      <View style={styles.expenseGap} />
      <View style={[styles.expensesSegment, { width: '23%', backgroundColor: '#FFA033' }]} />
      <View style={styles.expenseGap} />
      <View style={[styles.expensesSegment, { width: '18%', backgroundColor: '#FFB84D' }]} />
    </View>
  );
}

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.outerBackground} />

      <View style={styles.mainCard}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Header */}
          <View style={styles.headerRow}>
            <View style={styles.headerLeft}>
              <View style={styles.profileIcon}>
                <Ionicons name="person" size={18} color="#FFFFFF" />
              </View>
              <Text style={styles.headerName}>Charlotte</Text>
              <Ionicons
                name="chevron-forward"
                size={18}
                color="#FFFFFF"
                style={{ marginLeft: 4 }}
              />
            </View>

            {/* tap QR to go to notifications */}
            <TouchableOpacity
              style={styles.qrButton}
              onPress={() => navigation.navigate('Notifications')}
            >
              <MaterialCommunityIcons
                name="qrcode-scan"
                size={22}
                color="#FFFFFF"
              />
            </TouchableOpacity>
          </View>

          {/* Categories */}
          <View style={styles.categoriesRow}>
            <Category icon="public" label="Travel" />
            <Category icon="local-shipping" label="Delivery" />
            <Category icon="card-giftcard" label="Bonuses" />
            <Category icon="headset-mic" label="Support" />
          </View>

          {/* Cards */}
          <View style={styles.cardsRow}>
            <View style={[styles.card, styles.orangeCard]}>
              <View style={styles.cardLogoWrap}>
                <View style={[styles.cardLogoCircle, styles.cardLogoLeft]} />
                <View style={[styles.cardLogoCircle, styles.cardLogoRight]} />
              </View>
              <View style={styles.cardBottom}>
                <Text style={styles.cardAmount}>$4,098.12</Text>
                <View style={styles.cardInfo}>
                  <Text style={styles.cardLabel}>Debit</Text>
                  <Text style={styles.cardNumber}>•• 4385</Text>
                </View>
              </View>
            </View>

            <View style={[styles.card, styles.grayCard]}>
              <View style={styles.cardLogoWrap}>
                <View style={[styles.cardLogoCircle, styles.cardLogoLeft]} />
                <View style={[styles.cardLogoCircle, styles.cardLogoRight]} />
              </View>
              <View style={styles.cardBottom}>
                <Text style={styles.cardAmount}>$14.71</Text>
                <View style={styles.cardInfo}>
                  <Text style={styles.cardLabel}>Virtual</Text>
                  <Text style={styles.cardNumber}>•• 9081</Text>
                </View>
              </View>
            </View>

            <View style={styles.smallAddCard}>
              <View style={styles.addIconCircle}>
                <Text style={styles.addIconText}>+</Text>
              </View>
            </View>
          </View>

          {/* Expenses */}
          <View style={styles.expensesHeaderRow}>
            <Text style={styles.expensesTitle}>
              Expenses in <Text style={styles.expensesMonth}>June</Text>
            </Text>
            <Text style={styles.expensesTotal}>$5,091</Text>
          </View>

          <ExpensesBar />

          {/* Today */}
          <Text style={styles.sectionTitle}>Today</Text>
          <TransactionCard
            name="Matthew Billson"
            subtitle="Money Transfer"
            amount="$56.19"
            time="Jun 9, 12:08"
            avatarUri="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
          />

          {/* Yesterday */}
          <Text style={styles.sectionTitle}>Yesterday</Text>
          <TransactionCard
            name="Starbucks"
            subtitle="Food"
            amount="$122.47"
            time="Jun 8, 19:21"
            icon="🌟"
          />
          <TransactionCard
            name="Netflix"
            subtitle="Entertainment"
            amount="$13.17"
            time="Jun 8, 08:53"
            icon="N"
          />
        </ScrollView>

        <BottomTabBar navigation={navigation} active="Home" />
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
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 16,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#222222',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  headerName: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  qrButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#111111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoriesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  categoryItem: {
    alignItems: 'center',
  },
  categoryIconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#1C1C1C',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  categoryLabel: {
    fontSize: 13,
    color: '#FFFFFF',
  },
  cardsRow: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginTop: 24,
  },
  card: {
    flex: 1,
    borderRadius: 22,
    padding: 18,
    justifyContent: 'space-between',
    minHeight: 160,
  },
  orangeCard: {
    marginRight: 12,
    backgroundColor: '#FF6A1A',
  },
  grayCard: {
    marginRight: 12,
    backgroundColor: '#8A8A8A',
  },
  cardLogoWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 28,
  },
  cardLogoCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.6)',
  },
  cardLogoLeft: {
    position: 'absolute',
    left: 0,
  },
  cardLogoRight: {
    position: 'absolute',
    left: 16,
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
  cardBottom: {
    marginTop: 'auto',
  },
  cardAmount: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: '700',
    marginBottom: 8,
  },
  cardInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardLabel: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  cardNumber: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
    fontWeight: '500',
  },

  smallAddCard: {
    width: 48,
    borderRadius: 22,
    backgroundColor: '#111111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addIconCircle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#222222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addIconText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  expensesHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 28,
    marginBottom: 12,
  },
  expensesTitle: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  expensesMonth: {
    color: ORANGE,
  },
  expensesTotal: {
    fontSize: 16,
    color: '#C9C9C9',
  },
  expensesBarContainer: {
    height: 8,
    backgroundColor: 'transparent',
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  expensesSegment: {
    height: 8,
    backgroundColor: ORANGE,
    borderRadius: 4,
  },
  expenseGap: {
    width: 4,
  },
  sectionTitle: {
    marginTop: 8,
    marginBottom: 12,
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  transactionCard: {
    backgroundColor: '#141414',
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  transactionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 12,
  },
  avatarWrap: {
    marginRight: 12,
  },
  avatarImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  avatarPlaceholder: {
    backgroundColor: '#333333',
  },
  iconPlaceholder: {
    backgroundColor: '#1E8B3C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  transactionInfo: {
    flex: 1,
  },
  transactionName: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  transactionSubtitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  transactionSubtitle: {
    fontSize: 13,
    color: '#B3B3B3',
    marginLeft: 4,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: ORANGE,
  },
  transactionRight: {
    alignItems: 'flex-end',
    flexShrink: 0,
  },
  transactionAmount: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  transactionTime: {
    marginTop: 4,
    fontSize: 12,
    color: '#B3B3B3',
  },
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
});
