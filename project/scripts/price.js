
    function getQuiltPrice() {
        const widthInput = document.getElementById(`width`).value;
        const widthInt = parseFloat(widthInput);

        const heightInput = document.getElementById(`height`).value;
        const heightInt = parseFloat(heightInput);

        const quiltInput = document.querySelector(`[name = "quiltPrice"]:checked`);
        const quiltInt = parseFloat(quiltInput.value);

        let totalPrice = (widthInt * heightInt) * quiltInt;

        const minPrice = 55.00;

        if (totalPrice < minPrice){
            totalPrice = minPrice;
        }

        document.getElementById("userPrice").textContent = `${totalPrice.toFixed(2)}`;
    }