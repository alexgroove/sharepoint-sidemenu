var menuItems = [
	{ id: 1, label: 'Procédures', link: '#home', parent_id: 0, icon: 'check' },
	{ id: 123, label: 'Approvisionnements', link: '#home', parent_id: 0, icon: 'briefcase' },
	{ id: 124, label: 'Ingénierie', link: '#home', parent_id: 0, icon: 'stats' },
	{ id: 125, label: 'Entretien', link: '#home', parent_id: 0, icon: 'filter' },
	{ id: 126, label: 'Comptablilité', link: '#home', parent_id: 0, icon: 'usd' },
	{ id: 127, label: 'Environnement', link: '#home', parent_id: 0, icon: 'refresh' },


	{ id: 1261, label: 'Chapitre', link: '#home', parent_id: 127, icon: 'book' },
	{ id: 1262, label: 'Procédures', link: '#home', parent_id: 127, icon: 'check' },
	{ id: 1263, label: 'Formulaires', link: '#home', parent_id: 127, icon: 'list-alt' },
	{ id: 1264, label: 'Autres documents', link: '#home', parent_id: 127, icon: 'folder-open' },

	{ id: 1261, label: 'Chapitre', link: '#home', parent_id: 126, icon: 'book' },
	{ id: 1262, label: 'Procédures', link: '#home', parent_id: 126, icon: 'check' },
	{ id: 1263, label: 'Formulaires', link: '#home', parent_id: 126, icon: 'list-alt' },
	{ id: 1264, label: 'Autres documents', link: '#home', parent_id: 126, icon: 'folder-open' },


	{ id: 1251, label: 'Chapitre', link: '#home', parent_id: 125, icon: 'book' },
	{ id: 1252, label: 'Procédures', link: '#home', parent_id: 125, icon: 'check' },
	{ id: 1253, label: 'Formulaires', link: '#home', parent_id: 125, icon: 'list-alt' },
	{ id: 1254, label: 'Autres documents', link: '#home', parent_id: 125, icon: 'folder-open' },



	{ id: 1241, label: 'Chapitre', link: '#home', parent_id: 124, icon: 'book' },
	{ id: 1242, label: 'Procédures', link: '#home', parent_id: 124, icon: 'check' },
	{ id: 1243, label: 'Formulaires', link: '#home', parent_id: 124, icon: 'list-alt' },
	{ id: 1244, label: 'Autres documents', link: '#home', parent_id: 124, icon: 'folder-open' },
	{ id: 1245, label: 'Spécifications de tuyauterie', link: '#home', parent_id: 124, icon: 'bookmark' },


	{ id: 131231, label: 'Chapitre', link: '#home', parent_id: 123, icon: 'book' },
	{ id: 345345, label: 'Procédures', link: '#home', parent_id: 123, icon: 'check' },
	{ id: 1234, label: 'Formulaires', link: '#home', parent_id: 123, icon: 'list-alt' },
	{ id: 123678, label: 'Spécifications alimentations et produits', link: '#home', parent_id: 123, icon: 'bookmark' },


	// Procedures
	{ id: 2, label: 'Urgence', link: '#home', parent_id: 1, icon: 'warning-sign' },
	{ id: 3, label: 'Opération', link: '#home', parent_id: 1, icon: 'wrench' },

	// Urgences
	{ id: 4, label: 'Services aux auxiliaires', link: 'http://parachemsrv07/gesdoc/Production/Forms/AllItems.aspx?RootFolder=%2fgesdoc%2fProduction%2f2.0%20Services%20auxillaires%2f2.1%20Proc%C3%A9dures%2f2.1.1%20Urgence&FolderCTID=&View={E1E065BD-FEA8-4D5A-BDFA-51E2AF2A5D42}', parent_id: 2, icon: '' },
	{ id: 5, label: 'Chaudières', link: 'http://parachemsrv07/gesdoc/Production/Forms/AllItems.aspx?RootFolder=%2fgesdoc%2fProduction%2f3.0%20Chaudi%C3%A8res%2f3.1%20Proc%C3%A9dures%2f3.1.1%20Urgence&FolderCTID=&View={E1E065BD-FEA8-4D5A-BDFA-51E2AF2A5D42}', parent_id: 2, icon: '' },
	{ id: 6, label: 'Hydrogène', link: 'http://parachemsrv07/gesdoc/Production/Forms/AllItems.aspx?RootFolder=%2fgesdoc%2fProduction%2f4.0%20Hydrog%C3%A8ne%2f4.1%20Proc%C3%A9dures%2f4.1.1%20Urgence&FolderCTID=&View={E1E065BD-FEA8-4D5A-BDFA-51E2AF2A5D42}', parent_id: 2, icon: '' },
	{ id: 7, label: 'Paraxylène', link: 'http://parachemsrv07/gesdoc/Production/Forms/AllItems.aspx?RootFolder=%2fgesdoc%2fProduction%2f5.0%20Paraxyl%C3%A8ne%2f5.1%20Proc%C3%A9dures%2f5.1.1%20Urgence&FolderCTID=&View={E1E065BD-FEA8-4D5A-BDFA-51E2AF2A5D42}', parent_id: 2, icon: '' },
	{ id: 8, label: 'STDP', link: 'http://parachemsrv07/gesdoc/Production/Forms/AllItems.aspx?RootFolder=%2fgesdoc%2fProduction%2f6.0%20STDP%2f6.1%20Proc%C3%A9dures%2f6.1.1%20Urgence&FolderCTID=&View={E1E065BD-FEA8-4D5A-BDFA-51E2AF2A5D42}', parent_id: 2, icon: '' },
	{ id: 9, label: 'Tours de refroissisement', link: 'http://parachemsrv07/gesdoc/Production/Forms/AllItems.aspx?RootFolder=%2fgesdoc%2fProduction%2f7.0%20Tours%20de%20refroidissement%2f7.1%20Proc%C3%A9dures%2f7.1.1%20Urgence&FolderCTID=&View={E1E065BD-FEA8-4D5A-BDFA-51E2AF2A5D42}', parent_id: 2, icon: '' },

	// Operations
	{ id: 4, label: 'Services aux auxiliaires', link: '#services', parent_id: 3, icon: '' },
	{ id: 5, label: 'Chaudières', link: '#services', parent_id: 3, icon: '' },
	{ id: 6, label: 'Hydrogène', link: '#services', parent_id: 3, icon: '' },
	{ id: 7, label: 'Paraxylène', link: '#services', parent_id: 3, icon: '' },
	{ id: 8, label: 'STDP', link: '#services', parent_id: 3, icon: '' },
	{ id: 9, label: 'Tours de refroissisement', link: '#services', parent_id: 3, icon: '' },
]





function buildMenu (parent_id, menuItems) {
	var items = [];
	var currentItem, li, a, icon;
	var ul = document.createElement('ul');
	for(var i=0, len = menuItems.length; i < len; i++) {
		currentItem = menuItems[i];
		if (currentItem.parent_id == parent_id) {
			li = document.createElement('li');
			icon = document.createElement('span');
			icon.setAttribute('class', 'glyphicon glyphicon-' + currentItem.icon);
			li.appendChild(icon);
			a = document.createElement('a');
			a.setAttribute('href', currentItem.link);
			a.appendChild(document.createTextNode(currentItem.label));
			li.appendChild(a);
			li.appendChild(buildMenu(currentItem.id, menuItems));
			ul.appendChild(li);
		}
	}
	return ul;
}


window.addEventListener('load', function () {
	var menu = document.getElementById('nav');
	menu.appendChild(buildMenu(0, menuItems));
});



