import React from 'react';

const PaymentAndQuestionSection = () => {
    return (
        <div>
            {/* Payment Mode Section */}
            <div style={styles.paymentModeSection}>
                <h3>Payment Mode</h3>
                <ul style={styles.paymentList}>
                    <li><span style={styles.checkmark}>✓</span> Deposit to Account</li>
                    <li><span style={styles.checkmark}>✓</span> Net Banking</li>
                    <li><span style={styles.checkmark}>✓</span> Credit Card/Debit Card</li>
                    <li><span style={styles.checkmark}>✓</span> UPI</li>
                    <li><span style={styles.checkmark}>✓</span> Wallets (PayTM/PhonePe/Amazon etc.)</li>
                </ul>
            </div>

            {/* Question Section */}
            <div style={styles.questionSection}>
                <h4>Have a question about Tyres?</h4>
                <p>Get an answer in 24 hours from our experts.</p>
                <input
                    type="text"
                    placeholder="Ask or search your question"
                    style={styles.inputBox}
                />
            </div>
        </div>
    );
};

const styles = {
    paymentModeSection: {
        padding: '20px',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        marginBottom: '20px',
    },
    paymentList: {
        listStyleType: 'none',
        padding: '0',
        margin: '0',
    },
    checkmark: {
        color: '#4CAF50',  // Green color for checkmark
        fontWeight: 'bold',
        marginRight: '8px',
    },
    questionSection: {
        padding: '20px',
        backgroundColor: '#fff4cc',
        borderRadius: '8px',
        textAlign: 'center',
    },
    inputBox: {
        width: '80%',
        padding: '10px',
        borderRadius: '20px',
        border: '1px solid #ccc',
        marginTop: '10px',
    },
};

export default PaymentAndQuestionSection;
