
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Shield, Scale, Users, CheckCircle, Play } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
      {/* Header */}
      <header className="bg-black/90 backdrop-blur-sm shadow-2xl border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Scale className="h-8 w-8 text-amber-400" />
              <span className="text-2xl font-bold text-white">עו"ד יונתן שלו</span>
            </div>
            <Button className="bg-amber-600 hover:bg-amber-700 text-black font-semibold border-0">
              יצירת קשר
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              עורך דין יונתן שלו
            </h1>
            <div className="text-xl md:text-2xl text-amber-400 font-semibold mb-8">
              מתמחה בדיני נזיקין ותאונות
            </div>
            <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              ניסיון רב בייצוג לקוחות בתביעות נזיקין, תאונות דרכים, תאונות עבודה ונכות. 
              אני מתחייב לקבל עבורכם את הפיצויים המלאים המגיעים לכם.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-black font-semibold px-8 py-4 text-lg border-0">
                <Phone className="mr-2 h-5 w-5" />
                התקשרו עכשיו
              </Button>
              <Button size="lg" variant="outline" className="border-amber-600 text-amber-400 hover:bg-amber-600 hover:text-black px-8 py-4 text-lg">
                <Mail className="mr-2 h-5 w-5" />
                שלחו הודעה
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">הכירו אותי</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              סרטון תדמית קצר על הניסיון והמומחיות שלי בתחום דיני הנזיקין
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-amber-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-amber-700 transition-colors cursor-pointer">
                    <Play className="h-8 w-8 text-black mr-1" />
                  </div>
                  <p className="text-gray-300 text-lg">לחצו להפעלת הסרטון</p>
                  <p className="text-gray-500 text-sm mt-2">סרטון תדמית - 2:30 דקות</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="py-20 px-6 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">תחומי התמחות</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              מספק שירותים משפטיים מקצועיים במגוון תחומים בדיני נזיקין ותאונות
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializations.map((spec, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:shadow-2xl hover:shadow-amber-600/20 transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-br from-amber-600 to-amber-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <spec.icon className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{spec.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{spec.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-black">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">למה לבחור בי?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-black/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-2">ניסיון רב</h3>
                <p className="opacity-90">שנים של ניסיון בטיפול בתיקי נזיקין מורכבים</p>
              </div>
              <div className="text-center">
                <div className="bg-black/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-2">יחס אישי</h3>
                <p className="opacity-90">טיפול אישי ומסור בכל תיק ולקוח</p>
              </div>
              <div className="text-center">
                <div className="bg-black/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-2">תוצאות מוכחות</h3>
                <p className="opacity-90">הצלחה מוכחת בקבלת פיצויים מלאים ללקוחות</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">בואו נתחיל</h2>
            <p className="text-lg text-gray-300">
              יעוץ ראשוני ללא עלות. צרו קשר עוד היום לקבלת ייעוץ מקצועי
            </p>
          </div>
          
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-2xl">
            <CardContent className="p-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">פרטי התקשרות</h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-amber-600 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-black" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">טלפון</div>
                        <div className="text-gray-300">050-1234567</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="bg-amber-600 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-black" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">אימייל</div>
                        <div className="text-gray-300">yonatan@law-office.co.il</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="bg-amber-600 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-black" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">כתובת</div>
                        <div className="text-gray-300">רחוב המשפט 123, תל אביב</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">שעות פעילות</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-white">ראשון - חמישי</span>
                      <span className="text-gray-300">9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white">יום שישי</span>
                      <span className="text-gray-300">9:00 - 13:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white">שבת</span>
                      <span className="text-gray-300">סגור</span>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <Button className="w-full bg-amber-600 hover:bg-amber-700 text-black font-semibold py-4 text-lg border-0">
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
      <footer className="bg-black text-white py-8 px-6 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Scale className="h-6 w-6 text-amber-400" />
            <span className="text-xl font-bold">עו"ד יונתן שלו</span>
          </div>
          <p className="text-gray-400">
            © 2024 עו"ד יונתן שלו. כל הזכויות שמורות.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
