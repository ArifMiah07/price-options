import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';
const LineChart = () => {

    const mathMarksData = [
        {"student_id": 1, "name": "Alice", "math_marks": 85, "physics_marks": 78, "chemistry_marks": 92},
  {"student_id": 2, "name": "Bob", "math_marks": 78, "physics_marks": 70, "chemistry_marks": 85},
  {"student_id": 3, "name": "Charlie", "math_marks": 92, "physics_marks": 88, "chemistry_marks": 90},
  {"student_id": 4, "name": "David", "math_marks": 68, "physics_marks": 65, "chemistry_marks": 75},
  {"student_id": 5, "name": "Emily", "math_marks": 75, "physics_marks": 72, "chemistry_marks": 80},
  {"student_id": 6, "name": "Frank", "math_marks": 81, "physics_marks": 80, "chemistry_marks": 85},
  {"student_id": 7, "name": "Grace", "math_marks": 90, "physics_marks": 85, "chemistry_marks": 92},
  {"student_id": 8, "name": "Hannah", "math_marks": 88, "physics_marks": 82, "chemistry_marks": 90},
  {"student_id": 9, "name": "Isaac", "math_marks": 79, "physics_marks": 75, "chemistry_marks": 85},
  {"student_id": 10, "name": "Jack", "math_marks": 83, "physics_marks": 78, "chemistry_marks": 88}
    ]
      
    
    return (
        <div>
            <LChart width={1000} height={400} data={mathMarksData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis dataKey={"math_marks"}></YAxis>
                <Line dataKey={"math_marks"} stroke="red"></Line>
                <Line dataKey={"physics_marks"} stroke='green'></Line>
                <Line dataKey={"chemistry_marks"} stroke='blue'></Line>
                
            </LChart>
        </div>
    );
};

export default LineChart;