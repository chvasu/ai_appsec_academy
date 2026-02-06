import { getCourses } from "@/lib/db";
import { CourseCard } from "@/components/CourseCard";

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <p className="text-sm text-cyber-accent font-mono mb-2">
          &gt; ls ./training-programs --detailed
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-cyber-text mb-4">
          Training Programs
        </h1>
        <p className="text-cyber-muted max-w-xl mx-auto">
          Choose the program that matches your threat model and skill level.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
