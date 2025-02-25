export function setUpModal() {

    const modal = document.getElementById('payment-modal')
    const closeButton = document.getElementById('modal-close-btn')
    const paymentForm = document.getElementById('payment-form');


    
    if(!modal || !closeButton || !paymentForm) {
        console.error("Modal elements not found in DOM")
        return
    }


    closeButton.addEventListener('click', () => {
        modal.classList.remove('show')
        
    })

    paymentForm.addEventListener('submit', (event) => {
        event.preventDefault()

        if(paymentForm.checkValidity()) { 
            console.log('Payment successful')
            modal.classList.remove('show')
            document.getElementById('cart-container').innerHTML = `
                <div class="payment-success-container">
                    <p class="payment-success-text">Thank you! Your order is on its way</p>
                </div>
            `

        } else {
            console.log("Please fill in all required fields")
            paymentForm.reportValidity()
        }
    })

}