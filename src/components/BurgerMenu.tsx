// BurgerMenu.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const BurgerMenu = () => {
  const [isMenuVisible, setMenuVisible] = useState(false); // Initial state: menu is hidden

  // Dummy menu items (replace with your actual menu items)
  const menuItems = [
    'Home',
    'Profile',
    'Settings',
    'Logout',
  ];

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible); // Toggle menu visibility
  };

  return (
    <View style={styles.container}>
      {/* Burger Menu Icon */}
      <TouchableOpacity style={styles.iconContainer} onPress={toggleMenu}>
        <Icon name="bars" size={24} color="white" />
      </TouchableOpacity>

      {/* Menu Items (Conditional rendering based on visibility) */}
      {isMenuVisible && (
        <View style={styles.menuItems}>
          {menuItems.map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuItem}>
              <Text style={styles.menuItemText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 0,
  },
  iconContainer: {
    padding: 10,
  },
  menuItems: {
    flexDirection: 'column',
    marginLeft: 0,
    height: 800,
    width: 200,
    // marginLeft: 16,
    position: 'absolute',
    top: 50, // Adjust the top position to align with the burger icon
    backgroundColor: 'black',
    zIndex: 1, // Ensure menu appears above other content
  },
  menuItem: {
    paddingVertical: 15,
  },
  menuItemText: {
    color: 'white',

  },
});

export default BurgerMenu;
