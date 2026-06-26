document.addEventListener("DOMContentLoaded", function () {

    // ===================== MILK ORDER =====================

    const milkForm = document.getElementById("milkOrderForm");

    if (milkForm) {
        milkForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("milk-name").value.trim();
            const quantity = document.getElementById("milk-quantity").value;
            const address = document.getElementById("milk-address").value.trim();

            const phoneNumber = "919121556689";

            const message =
`🥛 *Satya Ganga Dairy Milk Order*

Customer Name: ${name}

Quantity: ${quantity} Litres

Delivery Address:
${address}`;

            window.open(
                `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
                "_blank"
            );

            milkForm.reset();
        });
    }

    // ===================== CURD ORDER =====================

    const curdForm = document.getElementById("curdOrderForm");

    if (curdForm) {
        curdForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("curd-name").value.trim();
            const quantity = document.getElementById("curd-quantity").value;
            const address = document.getElementById("curd-address").value.trim();

            const phoneNumber = "919121556689";

            const message =
`🥣 *Satya Ganga Dairy Pot Curd Order*

Customer Name: ${name}

Quantity: ${quantity} Kg

Delivery Address:
${address}`;

            window.open(
                `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
                "_blank"
            );

            curdForm.reset();
        });
    }

});
