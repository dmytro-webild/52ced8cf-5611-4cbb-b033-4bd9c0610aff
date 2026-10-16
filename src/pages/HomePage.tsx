import AboutFeaturesSplit from '@/components/sections/about/AboutFeaturesSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FeaturesBentoGrid from '@/components/sections/features/FeaturesBentoGrid';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import HeroBillboardBrand from '@/components/sections/hero/HeroBillboardBrand';
import { Award, Sparkles, Target } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBillboardBrand
      brand="Vikings Bay Bakım Salonu"
      description="2021 ve 2022 Türkiye Şampiyonu ile stilinizi zirveye taşıyın. Altın oran estetiği, profesyonel dokunuşlar."
      primaryButton={{
        text: "Hemen Randevu Al",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Hizmetleri İncele",
        href: "#services",
      }}
      imageSrc="https://storage.googleapis.com/webild/users/user_3FBXa6FDYWgNAypWnyOHWEsYPkg/uploaded-1792152676067-0mg6w701.jpg"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutFeaturesSplit
      tag="Uzmanlık"
      title="Türkiye Şampiyonu Ustalık"
      description="2021 ve 2022 Türkiye Berberlik Şampiyonu olan Sinan İnci liderliğindeki Vikings Bay, erkek bakımında altın oran estetiğini merkeze alıyor. Her kesim bir sanat eseri."
      items={[
        {
          icon: Award,
          title: "Şampiyon Kalitesi",
          description: "Resmi Türkiye şampiyonluğu ile tescilli uzmanlık.",
        },
        {
          icon: Target,
          title: "Altın Oran",
          description: "Yüz hatlarınıza en uygun altın oran tasarımlar.",
        },
        {
          icon: Sparkles,
          title: "VİP Deneyim",
          description: "Size özel kişiselleştirilmiş bakım süreçleri.",
        },
      ]}
      imageSrc="https://storage.googleapis.com/webild/users/user_3FBXa6FDYWgNAypWnyOHWEsYPkg/uploaded-1792152676071-y91zp6y9.jpg"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <FeaturesImageBento
      tag="Hizmetlerimiz"
      title="Erkek Bakımında Mükemmellik"
      description="Her biri özenle uygulanan profesyonel bakım hizmetlerimiz."
      items={[
        {
          title: "Anatomik Saç Kesimi",
          description: "Yüz formuna uygun özel kesim.",
          imageSrc: "https://images.pexels.com/photos/10318041/pexels-photo-10318041.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Altın Oran Sakal Kesimi",
          description: "Yüzünüze kusursuz uyum sağlayan sakal.",
          imageSrc: "https://images.pexels.com/photos/9992820/pexels-photo-9992820.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Altın Oran Kaş Alımı",
          description: "Bakışlarınıza anlam katan estetik dokunuş.",
          imageSrc: "https://images.pexels.com/photos/30473035/pexels-photo-30473035.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Epilasyon İşlemi",
          description: "Temiz ve pürüzsüz cilt için profesyonel destek.",
          imageSrc: "https://images.pexels.com/photos/6007401/pexels-photo-6007401.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Perma İşlemi",
          description: "Modern hacimli saç stilleri.",
          imageSrc: "https://images.pexels.com/photos/13138585/pexels-photo-13138585.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Renklendirme",
          description: "Doğal saç açma ve renklendirme.",
          imageSrc: "https://images.pexels.com/photos/7388935/pexels-photo-7388935.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "VİP Hizmet",
          description: "Size özel ayrıcalıklı bakım.",
          imageSrc: "https://images.pexels.com/photos/7755680/pexels-photo-7755680.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="features" data-section="features">
    <SectionErrorBoundary name="features">
          <FeaturesBentoGrid
      tag="Farkımız"
      title="Neden Vikings Bay?"
      description="Bizi tercih etmek için profesyonel nedenleriniz."
      features={[
        {
          title: "Hijyenik Ortam",
          description: "Tüm ekipmanlarımız sterilize edilmiştir.",
          imageSrc: "https://storage.googleapis.com/webild/users/user_3FBXa6FDYWgNAypWnyOHWEsYPkg/uploaded-1792152676070-hps5ti6k.jpg",
        },
        {
          title: "Kişisel Tasarım",
          description: "Stil danışmanlığı ile size özel çözümler.",
          imageSrc: "https://storage.googleapis.com/webild/users/user_3FBXa6FDYWgNAypWnyOHWEsYPkg/uploaded-1792152676071-jz68fp9i.jpg",
        },
        {
          title: "Profesyonel Ürünler",
          description: "Dünya markası bakım ürünleri.",
          imageSrc: "https://storage.googleapis.com/webild/users/user_3FBXa6FDYWgNAypWnyOHWEsYPkg/uploaded-1792152676072-9a1kbt37.jpg",
        },
        {
          title: "Samimi Atmosfer",
          description: "Kendinizi evinizde hissedeceğiniz ortam.",
          imageSrc: "https://images.pexels.com/photos/11424755/pexels-photo-11424755.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Randevu"
      text="Stilinizi güncellemeye hazır mısınız? Hemen yerinizi ayırtın."
      primaryButton={{
        text: "WhatsApp'tan Randevu Al",
        href: "https://wa.me/905550000000",
      }}
      secondaryButton={{
        text: "Bizi Arayın",
        href: "tel:+905550000000",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
