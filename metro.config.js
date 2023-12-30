const { getDefaultConfig } = require("expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

const config = { ...defaultConfig };

config.resolver = config.resolver || {};
config.resolver.assetExts = config.resolver.assetExts || [];

config.resolver.assetExts.push('lottie');

module.exports = config;
