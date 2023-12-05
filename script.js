        function toggleProjectTab(tabName) {
            var tabs = document.querySelectorAll('.project-tab');
            tabs.forEach(function (tab) {
                tab.classList.remove('active');
            });
    
            var contents = document.querySelectorAll('.project-content');
            contents.forEach(function (content) {
                content.classList.remove('active');
            });
    
            var activeTab = document.getElementById(tabName + '-tab'); // Adiciona '-tab' para obter o ID do botão
            var activeContent = document.getElementById(tabName);
    
            activeTab.classList.add('active');
            activeContent.classList.add('active');
        }
    