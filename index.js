let motionDetected = true;
let doorOpen = false;
let windowOpen = true;
let currentHour = 23;
let isFamilyHome = false;
let isAlarmArmed = true;
let securityLevel = "high"; // low, medium, high
let isEmergencyMode = false;

// Smart Home Security System Logic
if (isEmergencyMode) {
    console.log("🚨 Emergency Mode Activated! Authorities have been notified.");
} 
else if (!isFamilyHome && isAlarmArmed) {
    // Night time check
    if (currentHour >= 22 || currentHour < 6) {
        if (motionDetected || doorOpen || windowOpen) {
            console.log("⚠️ Intrusion detected at night! Alarm triggered.");
        } else {
            console.log("✅ Home secure. Monitoring at high alert.");
        }
    } 
    // Day time check
    else {
        if (motionDetected && securityLevel === "high") {
            console.log("⚠️ Suspicious movement detected. Alarm triggered.");
        } else if (doorOpen || windowOpen) {
            console.log("⚠️ Door/Window open! Please check.");
        } else {
            console.log("✅ Home secure. Alarm armed.");
        }
    }
} 
else if (isFamilyHome && isAlarmArmed) {
    console.log("ℹ️ Family is home but alarm is still armed. Consider disarming.");
} 
else if (isFamilyHome && !isAlarmArmed) {
    console.log("🏠 Family is home. Security in relaxed mode.");
} 
else {
    console.log("🔒 Alarm is disarmed. Monitoring sensors in background.");
}