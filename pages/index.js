import { useState } from 'react';
import AssessmentLayout from '../src/components/assessment/AssessmentLayout';

export default function HomePage() {
    const [selectedSection, setSelectedSection] = useState('overview');

    return <AssessmentLayout />;
}
