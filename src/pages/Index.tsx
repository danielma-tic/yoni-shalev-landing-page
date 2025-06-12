
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Shield, Scale, Users, CheckCircle } from "lucide-react";

const Index = () => {
  const specializations = [
    {
      title: "דיני נזיקין",
      description: "ייצוג מקצועי בתביעות נזיקין ופיצויים",
      icon: Shield
    },
    {
      title: "תאונות חבויות", 
      description: "טיפול מומחה בתאונות חבויות ותביעות פיצויים",
      icon: Scale
    },
    {
      title: "נפילות במקומות ציבוריים",
      description: "ייצוג בתביעות נפילה במקומות ציבוריים ופרטיים",
      icon: Users
    },
    {
      title: "תאונות דרכים",
      description: "ייצוג נפגעי תאונות דרכים וקבלת פיצויים מלאים",
      icon: CheckCircle
    },
    {
      title: "תאונות עבודה",
      description: "ייצוג עובדים נפגעים וקבלת הפיצויים המגיעים",
      icon: Shield
    },
    {
      title: "נכות כללית",
      description: "ליווי מלא בתביעות נכות ובירור זכויות",
      icon: Scale
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Scale className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-primary">עו"ד יונתן שלו</span>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              יצירת קשר
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              עורך דין יונתן שלו
            </h1>
            <div className="text-xl md:text-2xl text-blue-600 font-semibold mb-8">
              מתמחה בדיני נזיקין ותאונות
            </div>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              ניסיון רב בייצוג לקוחות בתביעות נזיקין, תאונות דרכים, תאונות עבודה ונכות. 
              אני מתחייב לקבל עבורכם את הפיצויים המלאים המגיעים לכם.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                <Phone className="mr-2 h-5 w-5" />
                התקשרו עכשיו
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg">
                <Mail className="mr-2 h-5 w-5" />
                שלחו הודעה
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">תחומי התמחות</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              מספק שירותים משפטיים מקצועיים במגוון תחומים בדיני נזיקין ותאונות
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializations.map((spec, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border">
                <CardContent className="p-8 text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <spec.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">{spec.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{spec.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">למה לבחור בי?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">ניסיון רב</h3>
                <p className="opacity-90">שנים של ניסיון בטיפול בתיקי נזיקין מורכבים</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">יחס אישי</h3>
                <p className="opacity-90">טיפול אישי ומסור בכל תיק ולקוח</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">תוצאות מוכחות</h3>
                <p className="opacity-90">הצלחה מוכחת בקבלת פיצויים מלאים ללקוחות</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">בואו נתחיל</h2>
            <p className="text-lg text-muted-foreground">
              יעוץ ראשוני ללא עלות. צרו קשר עוד היום לקבלת ייעוץ מקצועי
            </p>
          </div>
          
          <Card className="shadow-2xl border border-border">
            <CardContent className="p-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-6">פרטי התקשרות</h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold">טלפון</div>
                        <div className="text-muted-foreground">050-1234567</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold">אימייל</div>
                        <div className="text-muted-foreground">yonatan@law-office.co.il</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold">כתובת</div>
                        <div className="text-muted-foreground">רחוב המשפט 123, תל אביב</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-6">שעות פעילות</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>ראשון - חמישי</span>
                      <span className="text-muted-foreground">9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>יום שישי</span>
                      <span className="text-muted-foreground">9:00 - 13:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>שבת</span>
                      <span className="text-muted-foreground">סגור</span>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg">
                      קבעו פגישה עוד היום
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Scale className="h-6 w-6" />
            <span className="text-xl font-bold">עו"ד יונתן שלו</span>
          </div>
          <p className="text-blue-100">
            © 2024 עו"ד יונתן שלו. כל הזכויות שמורות.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
