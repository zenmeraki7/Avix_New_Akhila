import { useMemo } from "react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Star } from "lucide-react";
import styles from "../../styles/home/TestimonialsSection.module.css";
import "../../styles/avix.css";

const TestimonialsSection = () => {
  const testimonials = useMemo(
    () => [
      {
        name: "Nishad Mohammed",
        role: "Business Owner",
        content:
          "AVIX helped me get a business loan quickly. Their process is transparent and customer service is excellent.",
        rating: 5,
      },
      {
        name: "Aiswarya S R",
        role: "Software Engineer",
        content:
          "Got my home loan approved in just 3 days! Amazing service and competitive rates.",
        rating: 5,
      },
      {
        name: "Kurian",
        role: "Doctor",
        content:
          "Their investment advisory helped me plan my finances better. Highly recommended!",
        rating: 5,
      },
    ],
    []
  );

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.testimonialsContainer}>
        <div className={styles.testimonialsHeader}>
          <h2 className={styles.testimonialsTitle}>
            What Our Customers Say
          </h2>
          <p className={styles.testimonialsSubtitle}>
            Real experiences from satisfied customers
          </p>
        </div>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`${styles.testimonialCard} avix-gradient-card avix-shadow-card`}
            >
              <CardContent className={styles.testimonialContent}>
                <div className={styles.testimonialRating}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className={styles.testimonialText}>
                  "{testimonial.content}"
                </p>
                <div>
                  <div className={styles.testimonialAuthor}>
                    {testimonial.name}
                  </div>
                  <div className={styles.testimonialRole}>
                    {testimonial.role}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;