      function openTab(evt, tabName) {
        // Скрыть все вкладки
        const tabContents = document.getElementsByClassName("tab-content");
        for (let i = 0; i < tabContents.length; i++) {
          tabContents[i].classList.remove("active");
        }

        // Убрать активный класс со всех кнопок
        const tabButtons = document.getElementsByClassName("tab-button");
        for (let i = 0; i < tabButtons.length; i++) {
          tabButtons[i].classList.remove("active");
        }

        // Показать текущую вкладку и добавить активный класс к кнопке
        document.getElementById(tabName).classList.add("active");
        evt.currentTarget.classList.add("active");
      }

      // Проверка наличия изображения и скрытие placeholder
      window.addEventListener("load", function () {
        const img = document.getElementById("characterImage");
        const placeholder = document.getElementById("placeholder");

        // Если у изображения указан src, показываем его
        if (img.src && img.src !== window.location.href) {
          img.style.display = "block";
          placeholder.style.display = "none";
        }

        // Отслеживаем загрузку изображения
        img.addEventListener("load", function () {
          if (this.complete && this.naturalHeight !== 0) {
            this.style.display = "block";
            placeholder.style.display = "none";
          }
        });

        img.addEventListener("error", function () {
          this.style.display = "none";
          placeholder.style.display = "block";
        });
      });