            <script>
// Get the main-nav

            var nav = document.getElementById('main-navi');

// Get the button that opens the modal
            var btn = document.getElementById("myBtn");



// When the user clicks the button, open the modal 
            btn.onclick = function() {
               nav.animate({
                height:'300px',
               });

            }