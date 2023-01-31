import { schema, normalize } from 'normalizr';

const course = new schema.Entity('courses');


const courseSchema = [course];


export function coursesNormalizer(data) {
  // return normalize(data, courseSchema);
  const normalizedData = normalize(data, courseSchema);
  console.log (normalizedData);
  console.log(normalizedData.entities.courses);
  return normalizedData.entities.courses;
}
