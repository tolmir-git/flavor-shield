import { useState } from 'react';

export type Language = 'en' | 'fr' | 'es' | 'ru' | 'it' | 'de' | 'zh';

export const LANGUAGES: { code: Language; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'zh', name: '中文', flag: '🇨🇳' }
];

const TRANSLATIONS = {
  en: {
    title: "Happy London Allergen Menu",
    subtitle: "Find dishes that are safe for your dietary needs",
    search: "Search dishes...",
    filter: "Filter by allergen",
    clear: "Clear filters",
    noResults: "No dishes match your current filters",
    noAllergens: "No known allergens",
    traces: "May contain traces of",
    crossContamination: "Cross-contamination",
    crossContaminationOn: "Hide items with traces",
    crossContaminationOff: "Show items with traces",
    categories: {
      All: "All Dishes",
      Salads: "Salads",
      Starters: "Starters", 
      Mains: "Main Courses",
      Desserts: "Desserts",
      Drinks: "Beverages"
    },
    allergens: {
      celery: "Celery",
      gluten: "Gluten",
      crustaceans: "Crustaceans",
      eggs: "Eggs",
      fish: "Fish",
      lupin: "Lupin",
      milk: "Dairy/Milk",
      mollusc: "Molluscs",
      mustard: "Mustard",
      nuts: "Tree Nuts",
      peanuts: "Peanuts",
      sesame: "Sesame",
      soya: "Soya",
      sulphur: "Sulphur Dioxide"
    },
    description: "View details"
  },
  fr: {
    title: "Menu des Allergènes Happy London",
    subtitle: "Trouvez des plats adaptés à vos besoins alimentaires",
    search: "Rechercher des plats...",
    filter: "Filtrer par allergène",
    clear: "Effacer les filtres",
    noResults: "Aucun plat ne correspond aux filtres actuels",
    noAllergens: "Aucun allergène connu",
    traces: "Peut contenir des traces de",
    crossContamination: "Contamination croisée",
    crossContaminationOn: "Masquer les éléments avec traces",
    crossContaminationOff: "Afficher les éléments avec traces",
    categories: {
      All: "Tous les Plats",
      Salads: "Salades",
      Starters: "Entrées",
      Mains: "Plats Principaux", 
      Desserts: "Desserts",
      Drinks: "Boissons"
    },
    allergens: {
      celery: "Céleri",
      gluten: "Gluten", 
      crustaceans: "Crustacés",
      eggs: "Œufs",
      fish: "Poisson",
      lupin: "Lupin",
      milk: "Lait/Produits laitiers",
      mollusc: "Mollusques",
      mustard: "Moutarde",
      nuts: "Fruits à coque",
      peanuts: "Arachides",
      sesame: "Sésame",
      soya: "Soja",
      sulphur: "Dioxyde de soufre"
    },
    description: "Voir les détails"
  },
  es: {
    title: "Menú de Alérgenos Happy London",
    subtitle: "Encuentra platos seguros para tus necesidades dietéticas",
    search: "Buscar platos...",
    filter: "Filtrar por alérgeno",
    clear: "Limpiar filtros",
    noResults: "No hay platos que coincidan con los filtros actuales",
    noAllergens: "Sin alérgenos conocidos",
    traces: "Puede contener trazas de",
    crossContamination: "Contaminación cruzada",
    crossContaminationOn: "Ocultar elementos con trazas",
    crossContaminationOff: "Mostrar elementos con trazas",
    categories: {
      All: "Todos los Platos",
      Salads: "Ensaladas",
      Starters: "Entrantes",
      Mains: "Platos Principales",
      Desserts: "Postres", 
      Drinks: "Bebidas"
    },
    allergens: {
      celery: "Apio",
      gluten: "Gluten",
      crustaceans: "Crustáceos",
      eggs: "Huevos",
      fish: "Pescado",
      lupin: "Altramuz",
      milk: "Lácteos/Leche",
      mollusc: "Moluscos",
      mustard: "Mostaza",
      nuts: "Frutos secos",
      peanuts: "Cacahuetes",
      sesame: "Sésamo",
      soya: "Soja",
      sulphur: "Dióxido de azufre"
    },
    description: "Ver detalles"
  },
  ru: {
    title: "Меню Аллергенов Happy London",
    subtitle: "Найдите блюда, безопасные для ваших диетических потребностей",
    search: "Поиск блюд...",
    filter: "Фильтр по аллергену",
    clear: "Очистить фильтры",
    noResults: "Нет блюд, соответствующих текущим фильтрам",
    noAllergens: "Известных аллергенов нет",
    traces: "Может содержать следы",
    crossContamination: "Перекрестное загрязнение",
    crossContaminationOn: "Скрыть элементы со следами",
    crossContaminationOff: "Показать элементы со следами",
    categories: {
      All: "Все Блюда",
      Salads: "Салаты",
      Starters: "Закуски",
      Mains: "Основные Блюда",
      Desserts: "Десерты",
      Drinks: "Напитки"
    },
    allergens: {
      celery: "Сельдерей",
      gluten: "Глютен",
      crustaceans: "Ракообразные",
      eggs: "Яйца",
      fish: "Рыба",
      lupin: "Люпин",
      milk: "Молочные продукты",
      mollusc: "Моллюски",
      mustard: "Горчица",
      nuts: "Орехи",
      peanuts: "Арахис",
      sesame: "Кунжут",
      soya: "Соя",
      sulphur: "Диоксид серы"
    },
    description: "Показать детали"
  },
  it: {
    title: "Menu Allergeni Happy London",
    subtitle: "Trova piatti sicuri per le tue esigenze alimentari",
    search: "Cerca piatti...",
    filter: "Filtra per allergene",
    clear: "Cancella filtri",
    noResults: "Nessun piatto corrisponde ai filtri attuali",
    noAllergens: "Nessun allergene conosciuto",
    traces: "Può contenere tracce di",
    crossContamination: "Contaminazione incrociata",
    crossContaminationOn: "Nascondi elementi con tracce",
    crossContaminationOff: "Mostra elementi con tracce",
    categories: {
      All: "Tutti i Piatti",
      Salads: "Insalate",
      Starters: "Antipasti",
      Mains: "Piatti Principali",
      Desserts: "Dessert",
      Drinks: "Bevande"
    },
    allergens: {
      celery: "Sedano",
      gluten: "Glutine",
      crustaceans: "Crostacei", 
      eggs: "Uova",
      fish: "Pesce",
      lupin: "Lupini",
      milk: "Latte/Latticini",
      mollusc: "Molluschi",
      mustard: "Senape",
      nuts: "Frutta a guscio",
      peanuts: "Arachidi",
      sesame: "Sesamo",
      soya: "Soia",
      sulphur: "Anidride solforosa"
    },
    description: "Vedi dettagli"
  },
  de: {
    title: "Happy London Allergen-Menü",
    subtitle: "Finden Sie Gerichte, die für Ihre Ernährungsbedürfnisse sicher sind",
    search: "Gerichte suchen...",
    filter: "Nach Allergen filtern",
    clear: "Filter löschen",
    noResults: "Keine Gerichte entsprechen den aktuellen Filtern",
    noAllergens: "Keine bekannten Allergene",
    traces: "Kann Spuren enthalten von",
    crossContamination: "Kreuzkontamination",
    crossContaminationOn: "Elemente mit Spuren ausblenden",
    crossContaminationOff: "Elemente mit Spuren anzeigen",
    categories: {
      All: "Alle Gerichte",
      Salads: "Salate",
      Starters: "Vorspeisen",
      Mains: "Hauptgerichte",
      Desserts: "Desserts",
      Drinks: "Getränke"
    },
    allergens: {
      celery: "Sellerie",
      gluten: "Gluten",
      crustaceans: "Krebstiere",
      eggs: "Eier",
      fish: "Fisch",
      lupin: "Lupinen",
      milk: "Milch/Milchprodukte",
      mollusc: "Weichtiere",
      mustard: "Senf",
      nuts: "Schalenfrüchte",
      peanuts: "Erdnüsse",
      sesame: "Sesam",
      soya: "Soja",
      sulphur: "Schwefeldioxid"
    },
    description: "Details anzeigen"
  },
  zh: {
    title: "Happy London 过敏原菜单",
    subtitle: "找到适合您饮食需求的安全菜品",
    search: "搜索菜品...",
    filter: "按过敏原筛选",
    clear: "清除筛选",
    noResults: "没有菜品符合当前筛选条件",
    noAllergens: "无已知过敏原",
    traces: "可能含有痕量",
    crossContamination: "交叉污染",
    crossContaminationOn: "隐藏含有痕量的项目",
    crossContaminationOff: "显示含有痕量的项目",
    categories: {
      All: "所有菜品",
      Salads: "沙拉",
      Starters: "开胃菜",
      Mains: "主菜",
      Desserts: "甜点",
      Drinks: "饮料"
    },
    allergens: {
      celery: "芹菜",
      gluten: "麸质",
      crustaceans: "甲壳类",
      eggs: "鸡蛋",
      fish: "鱼类",
      lupin: "羽扇豆",
      milk: "奶制品",
      mollusc: "软体动物",
      mustard: "芥末",
      nuts: "坚果",
      peanuts: "花生",
      sesame: "芝麻",
      soya: "大豆",
      sulphur: "二氧化硫"
    },
    description: "查看详情"
  }
};

export function useTranslation() {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = TRANSLATIONS[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return { language, setLanguage, t };
}