// src/utils/emailService.js
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your actual EmailJS public key

export const sendVerificationEmail = async (email, code) => {
  try {
    const templateParams = {
      to_email: email,
      verification_code: code,
      to_name: email.split('@')[0], // Use part before @ as name
    };

    const response = await emailjs.send(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your verification email template ID
      templateParams,
    );

    if (response.status === 200) {
      return { success: true, message: 'Doğrulama kodu gönderildi!' };
    } else {
      throw new Error('Email gönderilemedi');
    }
  } catch (error) {
    console.error('Email sending failed:', error);
    throw new Error('Doğrulama kodu gönderilirken bir hata oluştu');
  }
};

export const sendOrderConfirmation = async (orderDetails) => {
  try {
    // Send to customer
    await emailjs.send(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_ORDER_TEMPLATE_ID', // Replace with your order confirmation template ID
      {
        to_email: orderDetails.email,
        order_id: orderDetails.orderId,
        order_details: JSON.stringify(orderDetails.items),
        total_amount: orderDetails.total,
        delivery_address: orderDetails.address,
        to_name: orderDetails.name,
      }
    );

    // Send to admin
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_ADMIN_TEMPLATE_ID', // Replace with your admin notification template ID
      {
        to_email: 'kerem47980@gmail.com',
        order_id: orderDetails.orderId,
        customer_email: orderDetails.email,
        order_details: JSON.stringify(orderDetails.items),
        total_amount: orderDetails.total,
        delivery_address: orderDetails.address,
        customer_name: orderDetails.name,
      }
    );

    return { success: true, message: 'Sipariş onayı gönderildi!' };
  } catch (error) {
    console.error('Order confirmation failed:', error);
    throw new Error('Sipariş onayı gönderilirken bir hata oluştu');
  }
};