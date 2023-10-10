<!DOCTYPE html>
<html lang="en">
<head>
    <!-- ... (head content) ... -->
</head>
<body>
    <header>
        <nav>
            <div class="logo">CashPaddy</div>
            <ul>
                <li><a href="#" id="profile-link">Profile</a></li>
                <!-- ... (other navigation items) ... -->
            </ul>
        </nav>
    </header>

    <main>
        <!-- ... (main content) ... -->
    </main>

    <footer>
        <!-- ... (footer content) ... -->
    </footer>

    <script>
        // JavaScript code here
        document.addEventListener("DOMContentLoaded", function() {
            // Get a reference to the profile link and the profile dropdown
            const profileLink = document.getElementById("profile-link");
            const profileDropdown = document.getElementById("profile-dropdown");

            // Add a click event listener to the profile link
            profileLink.addEventListener("click", function(event) {
                event.preventDefault(); // Prevent the link from navigating

                // Toggle the display of the profile dropdown
                profileDropdown.style.display = (profileDropdown.style.display === "block") ? "none" : "block";
            });
        });
    </script>
</body>
</html>
