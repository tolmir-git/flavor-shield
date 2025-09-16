import React, { useState, useMemo, useEffect } from 'react';
import { Search, Filter, X, ToggleLeft, ToggleRight, ChevronDown, Sun, Moon } from 'lucide-react';
import { MENU_DATA, ALLERGEN_LIST, CATEGORIES, type MenuItem } from '../data/menuData';
import { useTranslation, LANGUAGES, type Language } from '../hooks/useTranslation';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

export function AllergenMenu() {
  const { language, setLanguage, t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedAllergens, setSelectedAllergens] = useState<string[]>([]);
  const [crossContaminationStrict, setCrossContaminationStrict] = useState(false);
  const [expandedDescriptions, setExpandedDescriptions] = useState<Set<number>>(new Set());
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [darkMode]);

  const toggleAllergenFilter = (allergen: string) => {
    setSelectedAllergens(prev => 
      prev.includes(allergen) 
        ? prev.filter(a => a !== allergen)
        : [...prev, allergen]
    );
  };

  const clearFilters = () => {
    setSelectedAllergens([]);
    setSearchTerm('');
    setSelectedCategory('All');
  };

  const toggleDescription = (dishId: number) => {
    setExpandedDescriptions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(dishId)) {
        newSet.delete(dishId);
      } else {
        newSet.add(dishId);
      }
      return newSet;
    });
  };

  const filteredItems = useMemo(() => {
    return MENU_DATA.filter(item => {
      // Category filter
      if (selectedCategory !== 'All' && item.category !== selectedCategory) {
        return false;
      }

      // Search filter
      if (searchTerm && !item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }

      // Allergen filter - hide items that contain selected allergens
      if (selectedAllergens.length > 0) {
        const hasSelectedAllergens = selectedAllergens.some(allergen => 
          item.allergens.includes(allergen)
        );
        
        // Also check traces if cross-contamination is strict
        const hasTracesOfSelectedAllergens = crossContaminationStrict && 
          selectedAllergens.some(allergen => 
            item.traces?.includes(allergen)
          );

        if (hasSelectedAllergens || hasTracesOfSelectedAllergens) {
          return false;
        }
      }

      return true;
    });
  }, [searchTerm, selectedCategory, selectedAllergens, crossContaminationStrict]);

  const groupedItems = useMemo(() => {
    const grouped: { [key: string]: MenuItem[] } = {};
    filteredItems.forEach(item => {
      if (!grouped[item.category]) {
        grouped[item.category] = [];
      }
      grouped[item.category].push(item);
    });
    return grouped;
  }, [filteredItems]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Header */}
      <div className="hero-gradient shadow-elevated">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                {t('title')}
              </h1>
              <p className="text-primary-foreground/90 text-lg">
                {t('subtitle')}
              </p>
            </div>

            <div className="flex items-center gap-3">
              {/* Dark/Light Mode Toggle */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setDarkMode(!darkMode)}
                className="bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20"
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>

              {/* Language Selector */}
              <Select value={language} onValueChange={(value: Language) => setLanguage(value)}>
                <SelectTrigger className="w-40 bg-white/10 border-white/20 text-primary-foreground">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {LANGUAGES.map(lang => (
                    <SelectItem key={lang.code} value={lang.code}>
                      <div className="flex items-center gap-2" style={{
                        backgroundImage: `url("data:image/svg+xml;base64,${btoa(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" fill="${
                          lang.code === 'en' ? '#012169' : 
                          lang.code === 'fr' ? '#002395' : 
                          lang.code === 'es' ? '#AA151B' : 
                          lang.code === 'ru' ? '#FFFFFF' : 
                          lang.code === 'it' ? '#009246' : 
                          lang.code === 'de' ? '#000000' : 
                          lang.code === 'zh' ? '#DE2910' : '#CCCCCC'
                        }"/></svg>`)}")`,
                        backgroundSize: '20px 14px',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'left center',
                        paddingLeft: '24px'
                      }}>
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder={t('search')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-14 text-lg bg-white/95 border-white/20 shadow-card"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filters Section */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {CATEGORIES.map(category => (
                  <SelectItem key={category} value={category}>
                    {t(`categories.${category}`)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Clear Filters */}
            {(selectedAllergens.length > 0 || searchTerm || selectedCategory !== 'All') && (
              <Button variant="outline" onClick={clearFilters} className="gap-2">
                <X className="w-4 h-4" />
                {t('clear')}
              </Button>
            )}

            {/* Cross-contamination Toggle */}
            {selectedAllergens.length > 0 && (
              <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-muted/50 border border-border">
                <span className="text-sm font-medium">{t('crossContamination')}:</span>
                <button
                  onClick={() => setCrossContaminationStrict(!crossContaminationStrict)}
                  className={`flex items-center gap-2 px-3 py-1 rounded-full transition-all ${
                    crossContaminationStrict 
                      ? 'bg-cross-contamination-on text-cross-contamination-on-foreground' 
                      : 'bg-cross-contamination-off text-cross-contamination-off-foreground'
                  }`}
                >
                  {crossContaminationStrict ? (
                    <>
                      <ToggleRight className="w-5 h-5" />
                      <span className="text-sm font-medium">{t('crossContaminationOn')}</span>
                    </>
                  ) : (
                    <>
                      <ToggleLeft className="w-5 h-5" />
                      <span className="text-sm font-medium">{t('crossContaminationOff')}</span>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Allergen Filter Chips */}
          <div className="flex flex-wrap gap-2">
            {ALLERGEN_LIST.map(allergen => (
              <button
                key={allergen.key}
                onClick={() => toggleAllergenFilter(allergen.key)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-smooth ${
                  selectedAllergens.includes(allergen.key)
                    ? 'bg-warning text-warning-foreground shadow-elevated'
                    : 'bg-muted text-muted-foreground hover:bg-warning/20'
                }`}
              >
                <span>{allergen.icon}</span>
                <span>{t(`allergens.${allergen.key}`)}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        {filteredItems.length === 0 ? (
          <Card className="text-center py-12 shadow-card">
            <CardContent>
              <Filter className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-xl font-semibold mb-2">{t('noResults')}</h3>
              <Button variant="outline" onClick={clearFilters}>
                {t('clear')}
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-8">
            {Object.entries(groupedItems).map(([category, items]) => (
              <div key={category}>
                <h2 className="text-2xl font-bold mb-4 text-primary">
                  {t(`categories.${category}`)} ({items.length})
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {items.map(item => (
                    <Card key={item.id} className="shadow-card hover:shadow-elevated transition-smooth">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-lg">{item.name}</CardTitle>
                            {item.price && (
                              <p className="text-2xl font-bold text-primary mt-1">{item.price}</p>
                            )}
                          </div>
                          {item.description && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => toggleDescription(item.id)}
                              className="gap-2"
                            >
                              {t('description')}
                              <ChevronDown className={`w-4 h-4 transition-transform ${
                                expandedDescriptions.has(item.id) ? 'rotate-180' : ''
                              }`} />
                            </Button>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        {expandedDescriptions.has(item.id) && item.description && (
                          <p className="text-muted-foreground mb-4 p-3 bg-muted/50 rounded-lg">
                            {item.description}
                          </p>
                        )}

                        {/* Allergen Information */}
                        <div className="space-y-3">
                          {item.allergens.length > 0 ? (
                            <div>
                              <h4 className="font-medium mb-2 text-warning">Contains:</h4>
                              <div className="flex flex-wrap gap-1">
                                {item.allergens.map(allergen => {
                                  const allergenInfo = ALLERGEN_LIST.find(a => a.key === allergen);
                                  return (
                                    <Badge key={allergen} className="allergen-chip">
                                      {allergenInfo?.icon} {t(`allergens.${allergen}`)}
                                    </Badge>
                                  );
                                })}
                              </div>
                            </div>
                          ) : (
                            <div>
                              <Badge className="allergen-chip safe">
                                ✅ {t('noAllergens')}
                              </Badge>
                            </div>
                          )}

                          {item.traces && item.traces.length > 0 && (
                            <div>
                              <h4 className="font-medium mb-2 text-warning/70">⚠️ {t('traces')}:</h4>
                              <div className="flex flex-wrap gap-1">
                                {item.traces.map(allergen => {
                                  const allergenInfo = ALLERGEN_LIST.find(a => a.key === allergen);
                                  return (
                                    <Badge key={allergen} variant="outline" className="text-warning/70 border-warning/30">
                                      {allergenInfo?.icon} {t(`allergens.${allergen}`)}
                                    </Badge>
                                  );
                                })}
                              </div>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}