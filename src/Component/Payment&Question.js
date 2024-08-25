import React from 'react';

const PaymentAndQuestionSection = () => {
    return (
        <div style={styles.container}>
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

            <div style={styles.contactFormSection}>
                <h3>Contact Us</h3>
                <form>
                    <div style={styles.formGroup}>
                        <label>Name:</label>
                        <input type="text" style={styles.input} />
                    </div>
                    <div style={styles.formGroup}>
                        <label>Email:</label>
                        <input type="email" style={styles.input} />
                    </div>
                    <div style={styles.formGroup}>
                        <label>Message:</label>
                        <textarea style={styles.textarea} />
                    </div>
                    <button type="submit" style={styles.button}>Submit</button>
                </form>
            </div>

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
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '20px',
    },
    paymentModeSection: {
        flex: '1',
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
        color: '#4CAF50',
        fontWeight: 'bold',
        marginRight: '8px',
    },
    contactFormSection: {
        flex: '1',
        padding: '20px',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    formGroup: {
        marginBottom: '15px',
    },
    input: {
        width: '100%',
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
    },
    textarea: {
        width: '100%',
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        height: '80px',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#4CAF50',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    questionSection: {
        padding: '20px',
        backgroundColor: '#fff4cc',
        borderRadius: '8px',
        textAlign: 'center',
        // marginTop: '20px',
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
