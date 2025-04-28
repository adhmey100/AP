// تغيير الخلفية بناءً على الوضع
function applyBackground() {
    const mode = localStorage.getItem('mode') || 'light';
    document.body.style.backgroundImage = 
        mode === 'dark' ? "url('wallpaper dark mod.png')" : "url('wallpaper.png')";
    document.getElementById('modeBtn').innerText = 
        mode === 'dark' ? "الوضع العادي ☀️" : "الوضع الداكن 🌙";
}

// وظيفة التبديل بين الوضعين
function toggleDarkMode() {
    const current = localStorage.getItem('mode') || 'light';
    const newMode = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem('mode', newMode);
    applyBackground();
}

// التحقق من الاسم وعرض الصور
function submitName() {
    const name = document.getElementById("nameInput").value.trim().toLowerCase();
    const imageContainer = document.getElementById("imageContainer");

    if (name === "صفاء") {
        const images = [
            "STRONGE/photo1.jpg",
            "STRONGE/photo2.jpg",
            "STRONGE/photo3.jpg",
            "STRONGE/photo4.jpg",
            "STRONGE/photo5.jpg",
            "STRONGE/photo6.jpg",
            "STRONGE/photo7.jpg",
            "STRONGE/photo8.jpg"
        ];

        imageContainer.innerHTML = ""; // تفريغ الحاوية قبل إضافة الصور

        images.forEach(src => {
            const img = document.createElement("img");
            img.src = src;
            img.style.width = "200px"; // حجم الصورة
            img.style.margin = "10px"; // إضافة مسافة بين الصور
            imageContainer.appendChild(img);
        });

        // إظهار زر عرض/إخفاء الأخطاء بعد تحميل الصور
        document.getElementById('errorBtn').style.display = "block";
    }
}

// عرض/إخفاء الأخطاء التي تحدث لأدهم
function toggleErrors() {
    const errorContainer = document.getElementById("errorContainer");
    
    if (errorContainer.style.display === "none" || errorContainer.style.display === "") {
        errorContainer.innerHTML = `
            <h3>الأخطاء التي تحدث لأدهم:</h3>
            <ul>
                <li>الباور بوينت مش بيشتغل</li>
                <li>جوجل كروم بيهنج كثير</li>
            </ul>
        `;
        errorContainer.style.display = "block";
    } else {
        errorContainer.style.display = "none";
    }
}

// تطبيق الخلفية عند تحميل الصفحة
applyBackground();
