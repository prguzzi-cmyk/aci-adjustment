import { Card, List, Typography } from 'antd';

const { Text, Link } = Typography;

export const statesList = [
	{
		value: 'colorado',
		label: 'Colorado',
	},
	{
		value: 'georgia',
		label: 'Georgia',
	},
	{
		value: 'iowa',
		label: 'Iowa',
	},
	{
		value: 'kentucky',
		label: 'Kentucky',
	},
	{
		value: 'louisiana',
		label: 'Louisiana',
	},
	{
		value: 'maryland',
		label: 'Maryland',
	},
	{
		value: 'newjersey',
		label: 'New Jersey',
	},
	{
		value: 'pennsylvania',
		label: 'Pennsylvania',
	},
	{
		value: 'southcarolina',
		label: 'South Carolina',
	},
	{
		value: 'texas',
		label: 'Texas',
	},
	{
		value: 'virginia',
		label: 'Virginia',
	},
];

export const steps = {
	colorado: [
		{
			title: 'Step 1',
			description: 'Learning Course',
			content: (
				<Card title='Complete Learning Course' bordered={false}>
					<List
						dataSource={[
							<>
								Go to{' '}
								<Link
									href='https://www.amazon.com/Claims-Adjuster-Secrets-Study-
								Guide/dp/1609713605/ref=sr 1
								3?crid=2UWG3G1S1C801&keywords=mometrix
								+claims+adjuster&qid=1655838620&sprefix=mometrix+claims+adjuste%2Caps%
								2C157&sr=8-3&ufe=app
								do%3Aamzn1.fos.08f69ac3-fd3d-4b88-bca2-8997e41410bb'
									target='_blank'
								>
									Claims Adjuster Secrets Study Guide
								</Link>
							</>,
							'We recommend the "Mometrix Claims Adjuster Test Review"',
							'State Law regarding Public Adjusting additionally needs to be studied, as it is not covered in this material',
						]}
						renderItem={(item) => <List.Item>{item}</List.Item>}
					/>
					<Text strong>
						*This is our recommended learning course. Alternatively, you may
						obtain your own course materials to study. We also offer free
						training sessions. You will be emailed a link to our Tuesday
						Training Sessions. Keep in mind, you will NOT pass the test without
						studying!
					</Text>
				</Card>
			),
		},
		{
			title: 'Step 2',
			description: 'Pass License Test',
			content: (
				<Card title='Pass License Test' bordered={false}>
					<List
						dataSource={[
							<>
								Go to{' '}
								<Link
									href='https://home.pearsonvue.com/co/insurance'
									target='_blank'
								>
									home.pearsonvue.com
								</Link>
							</>,
							'Create an account and complete the exam. Exam may be taken either online or in-person at a testing center',
						]}
						renderItem={(item) => <List.Item>{item}</List.Item>}
					/>
				</Card>
			),
		},
		{
			title: 'Step 3',
			description: 'State Application',
			content: (
				<Card title='State Application' bordered={false}>
					<List
						dataSource={[
							<>
								Once you have passed the exam, you can apply for a Public
								Adjuster's License here:{' '}
								<Link href='https://nipr.com' target='_blank'>
									nipr.com
								</Link>
							</>,
							'Scroll down, and select "Apply for a New License", then "Go to the Online Application". Choose "Individual" and use SSN as your identifier.',
							'Follow the remaining instructions to complete the License Application',
						]}
						renderItem={(item) => <List.Item>{item}</List.Item>}
					/>
				</Card>
			),
		},
		{
			title: 'Step 4',
			description: 'State Manual',
			content: (
				<Card title='State Manual' bordered={false}>
					<List
						dataSource={[
							<>
								For Additional Info:{' '}
								<Link
									href='https://home.pearsonvue.com/getattachment/9df8c6db-f2e3-4d14-a674-f07ba560388c/Colorado%20Division%20of%20Insurance%20Licensing%20Candidate%20Handbook.aspx'
									target='_blank'
								>
									Colorado Division of Insurance Licensing Candidate Handbook
								</Link>
							</>,
						]}
						renderItem={(item) => <List.Item>{item}</List.Item>}
					/>
				</Card>
			),
		},
	],
	georgia: [
		{
			title: 'Step 1',
			description: 'Learning Course',
			content: (
				<Card title='Complete Learning Course' bordered={false}>
					<List
						dataSource={[
							<>
								Go to{' '}
								<Link
									href='https://www.insurance-schools.com/Georgia_Adjuster_License_Prep_Course.aspx'
									target='_blank'
								>
									Georgia Adjuster License Prep Course
								</Link>
							</>,
							'Scroll to the bottom of the page and click “Add to Cart”. Create an account, and continue with course payment',
							'Use code “IAUA” for 10% off',
						]}
						renderItem={(item) => <List.Item>{item}</List.Item>}
					/>
					<Text strong>
						*This is our recommended learning course. Alternatively, you may
						obtain your own course materials to study. We also offer free
						training sessions. You will be emailed a link to our Tuesday
						Training Sessions. Keep in mind, you will NOT pass the test without
						studying! The State of Georgia REQUIRES a 40hr pre-licensing course.
					</Text>
				</Card>
			),
		},
		{
			title: 'Step 2',
			description: 'Pass License Test',
			content: (
				<Card title='Pass License Test' bordered={false}>
					<List
						dataSource={[
							<>
								Go to{' '}
								<Link
									href='https://home.pearsonvue.com/ga/insurance'
									target='_blank'
								>
									home.pearsonvue.com
								</Link>
							</>,
							'Create an account and complete the exam. Exam may be taken either online or in-person at a testing center',
						]}
						renderItem={(item) => <List.Item>{item}</List.Item>}
					/>
				</Card>
			),
		},
		{
			title: 'Step 3',
			description: 'State Application',
			content: (
				<Card title='State Application' bordered={false}>
					<List
						dataSource={[
							<>
								Once you have passed the exam, you can apply for a Public
								Adjuster's License here:{' '}
								<Link href='https://nipr.com' target='_blank'>
									nipr.com
								</Link>
							</>,
							'Scroll down, and select "Apply for a New License", then "Go to the Online Application". Choose "Individual" and use SSN as your identifier.',
							'Follow the remaining instructions to complete the License Application',
						]}
						renderItem={(item) => <List.Item>{item}</List.Item>}
					/>
				</Card>
			),
		},
		{
			title: 'Step 4',
			description: 'State Manual',
			content: (
				<Card title='State Manual' bordered={false}>
					<List
						dataSource={[
							<>
								The state provides a detailed instruction manual as well:{' '}
								<Link
									href='https://home.pearsonvue.com/getattachment/f090fc15-7aa4-4f06-b67c-7b52affe0875/Georgia%20Insurance%20Licensing%20Candidate%20Handbook.aspx'
									target='_blank'
								>
									Georgia Insurance Licensing Candidate Handbook
								</Link>
							</>,
						]}
						renderItem={(item) => <List.Item>{item}</List.Item>}
					/>
				</Card>
			),
		},
	],
	iowa: [
		{
			title: 'Step 1',
			description: 'Learning Course',
			content: (
				<Card title='Complete Learning Course' bordered={false}>
					<List
						dataSource={[
							<>
								Go to{' '}
								<Link
									href='https://www.amazon.com/Claims-Adjuster-Secrets-Study-Guide/dp/1609713605/ref=sr_1_3?crid=2UWG3G1S1C8OJ&keywords=mometrix+claims+adjuster&qid=1655838620&sprefix=mometrix+claims+adjuste%2Caps%2C157&sr=8-3&ufe=app_do%3Aamzn1.fos.08f69ac3-fd3d-4b88-bca2-8997e41410bb'
									target='_blank'
								>
									Claims Adjuster Secrets Study Guide
								</Link>
							</>,
							'We recommend the “Mometrix Claims Adjuster Test Review”',
							'State Law regarding Public Adjusting additionally needs to be studied, as it is not covered in this material',
						]}
						renderItem={(item) => <List.Item>{item}</List.Item>}
					/>
					<Text strong>
						*This is our recommended learning course. Alternatively, you may
						obtain your own course materials to study. We also offer free
						training sessions. You will be emailed a link to our Tuesday
						Training Sessions. Keep in mind, you will NOT pass the test without
						studying!
					</Text>
				</Card>
			),
		},
		{
			title: 'Step 2',
			description: 'Pass License Test',
			content: (
				<Card title='Pass License Test' bordered={false}>
					<List
						dataSource={[
							<>
								Go to{' '}
								<Link
									href='https://home.pearsonvue.com/ia/insurance'
									target='_blank'
								>
									home.pearsonvue.com
								</Link>
							</>,
							'Create an account and complete the exam. Exam may be taken either online or in-person at a testing center',
						]}
						renderItem={(item) => <List.Item>{item}</List.Item>}
					/>
				</Card>
			),
		},
		{
			title: 'Step 3',
			description: 'State Application',
			content: (
				<Card title='State Application' bordered={false}>
					<List
						dataSource={[
							<>
								Once you have passed the exam, you can apply for a Public
								Adjuster's License here:{' '}
								<Link href='https://nipr.com' target='_blank'>
									nipr.com
								</Link>
							</>,
							'Scroll down, and select "Apply for a New License", then "Go to the Online Application". Choose "Individual" and use SSN as your identifier.',
							'Follow the remaining instructions to complete the License Application',
						]}
						renderItem={(item) => <List.Item>{item}</List.Item>}
					/>
				</Card>
			),
		},
		{
			title: 'Step 4',
			description: 'State Manual',
			content: (
				<Card title='State Manual' bordered={false}>
					<List
						dataSource={[
							<>
								For Additional Info:{' '}
								<Link
									href='https://home.pearsonvue.com/getattachment/d1b96f93-c658-4b3e-be74-30079b313b6f/Iowa%20Department%20of%20Insurance%20Licensing%20Candidate%20Handbook.aspx'
									target='_blank'
								>
									Iowa Department of Insurance Licensing Candidate Handbook
								</Link>
							</>,
						]}
						renderItem={(item) => <List.Item>{item}</List.Item>}
					/>
				</Card>
			),
		},
	],
	kentucky: [
		{
			title: 'Step 1',
			description: 'Learning Course',
			content: (
				<Card title='Complete Learning Course' bordered={false}>
					<List
						dataSource={[
							<>
								Go to{' '}
								<Link
									href='https://insurance.ky.gov/ppc/newstatic_info.aspx?static_id=72'
									target='_blank'
								>
									insurance.ky.gov
								</Link>
							</>,
							<>
								Kentucky requires continuing education requirements for Public
								Adjuster's. 24 hours must be completed by an accredited training
								provider, listed here:{' '}
								<Link
									href='https://insurance.ky.gov/ppc/newstatic_info.aspx?static_id=74&MenuID=32&divid=2'
									target='_blank'
								>
									insurance.ky.gov
								</Link>
							</>,
						]}
						renderItem={(item) => <List.Item>{item}</List.Item>}
					/>
					<Text strong>
						*This is our recommended learning course. Alternatively, you may
						obtain your own course materials to study. We also offer free
						training sessions. You will be emailed a link to our Tuesday
						Training Sessions. Keep in mind, you will NOT pass the test without
						studying!
					</Text>
				</Card>
			),
		},
		{
			title: 'Step 2',
			description: 'Pass License Test',
			content: (
				<Card title='Pass License Test' bordered={false}>
					<List
						dataSource={[
							<>
								Go to{' '}
								<Link
									href='https://insurance.ky.gov/ppc/newstatic_info.aspx?static_id=71&MenuID=32&divid=2'
									target='_blank'
								>
									insurance.ky.gov
								</Link>
							</>,
							'Create an account and complete the exam. Exam may be taken either online or in-person at a testing center',
						]}
						renderItem={(item) => <List.Item>{item}</List.Item>}
					/>
				</Card>
			),
		},
		{
			title: 'Step 3',
			description: 'State Application',
			content: (
				<Card title='State Application' bordered={false}>
					<List
						dataSource={[
							<>
								Once you have passed the exam, you can apply for a Public
								Adjuster's License here:{' '}
								<Link href='https://nipr.com' target='_blank'>
									nipr.com
								</Link>
							</>,
							'Scroll down, and select "Apply for a New License", then "Go to the Online Application". Choose "Individual" and use SSN as your identifier.',
							'Follow the remaining instructions to complete the License Application',
						]}
						renderItem={(item) => <List.Item>{item}</List.Item>}
					/>
				</Card>
			),
		},
	],
	louisiana: [
		{
			title: 'Step 1',
			description: 'Learning Course',
			content: (
				<Card title='Complete Learning Course' bordered={false}>
					<List
						dataSource={[
							<>
								Go to{' '}
								<Link
									href='https://www.insurance-schools.com/become_a_louisiana_adjuster.aspx'
									target='_blank'
								>
									Become a Louisiana adjuster
								</Link>
							</>,
							'Scroll to the bottom of the page and click “Add to Cart”. Create an account, and continue with course payment',
							'Use code “IAUA” for 10% off',
							'Alternatively, we recommend the "Mometrix Claims Adjuster Test Review"',
							<>
								Purchase here:{' '}
								<Link
									href='https://www.amazon.com/Claims-Adjuster-Secrets-Study-Guide/dp/1609713605/ref=sr_1_3?crid=2UWG3G1S1C8OJ&keywords=mometrix+claims+adjuster&qid=1655838620&sprefix=mometrix+claims+adjuste%2Caps%2C157&sr=8-3&ufe=app_do%3Aamzn1.fos.08f69ac3-fd3d-4b88-bca2-8997e41410bb'
									target='_blank'
								>
									Mometrix Claims Adjuster Test Review
								</Link>
							</>,
							'State Law regarding Public Adjusting additionally needs to be studied, as it is not covered in Mometrix',
						]}
						renderItem={(item) => <List.Item>{item}</List.Item>}
					/>
					<Text strong>
						*This is our recommended learning course. Alternatively, you may
						obtain your own course materials to study. We also offer free
						training sessions. You will be emailed a link to our Tuesday
						Training Sessions. Keep in mind, you will NOT pass the test without
						studying!
					</Text>
				</Card>
			),
		},
		{
			title: 'Step 2',
			description: 'Pass License Test',
			content: (
				<Card title='Pass License Test' bordered={false}>
					<List
						dataSource={[
							<>
								Go to{' '}
								<Link
									href='https://candidate.psiexams.com/catalog/fti_agency_license_details.jsp?testid=4093'
									target='_blank'
								>
									candidate.psiexams.com
								</Link>
							</>,
							'Create an account and complete the exam. Exam may be taken either online or in-person at a testing center',
						]}
						renderItem={(item) => <List.Item>{item}</List.Item>}
					/>
				</Card>
			),
		},
		{
			title: 'Step 3',
			description: 'State Application',
			content: (
				<Card title='State Application' bordered={false}>
					<List
						dataSource={[
							<>
								Once you have passed the exam, you can apply for a Public
								Adjuster's License here:{' '}
								<Link href='https://nipr.com' target='_blank'>
									nipr.com
								</Link>
							</>,
							'Scroll down, and select "Apply for a New License", then "Go to the Online Application". Choose "Individual" and use SSN as your identifier.',
							'Follow the remaining instructions to complete the License Application',
						]}
						renderItem={(item) => <List.Item>{item}</List.Item>}
					/>
				</Card>
			),
		},
	],
	maryland: [
		{
			title: 'Step 1',
			description: 'Learning Course',
			content: (
				<Card title='Complete Learning Course' bordered={false}>
					<List
						dataSource={[
							<>
								Go to{' '}
								<Link
									href='https://www.amazon.com/Claims-Adjuster-Secrets-Study-Guide/dp/1609713605/ref=sr_1_3?crid=2UWG3G1S1C8OJ&keywords=mometrix+claims+adjuster&qid=1655838620&sprefix=mometrix+claims+adjuste%2Caps%2C157&sr=8-3&ufe=app_do%3Aamzn1.fos.08f69ac3-fd3d-4b88-bca2-8997e41410bb'
									target='_blank'
								>
									Mometrix Claims Adjuster
								</Link>
							</>,
							'We recommend the "Mometrix Claims Adjuster Test Review"',
							'State Law regarding Public Adjusting additionally needs to be studied, as it is not covered in this material',
						]}
						renderItem={(item) => <List.Item>{item}</List.Item>}
					/>
					<Text strong>
						*This is our recommended learning course. Alternatively, you may
						obtain your own course materials to study. We also offer free
						training sessions. You will be emailed a link to our Tuesday
						Training Sessions. Keep in mind, you will NOT pass the test without
						studying!
					</Text>
				</Card>
			),
		},
		{
			title: 'Step 2',
			description: 'Pass License Test',
			content: (
				<Card title='Pass License Test' bordered={false}>
					<List
						dataSource={[
							<>
								Go to{' '}
								<Link
									href='https://candidate.psiexams.com/catalog/fap_test_details.jsp?testid=979&prev_page=/catalog/fap_test_catalog_details.jsp'
									target='_blank'
								>
									candidate.psiexams.com
								</Link>
							</>,
							'Create an account and complete the exam. Exam may be taken either online or in-person at a testing center',
						]}
						renderItem={(item) => <List.Item>{item}</List.Item>}
					/>
				</Card>
			),
		},
		{
			title: 'Step 3',
			description: 'State Application',
			content: (
				<Card title='State Application' bordered={false}>
					<List
						dataSource={[
							<>
								Once you have passed the exam, you can apply for a Public
								Adjuster's License here:{' '}
								<Link href='https://nipr.com' target='_blank'>
									nipr.com
								</Link>
							</>,
							'Scroll down, and select "Apply for a New License", then "Go to the Online Application". Choose "Individual" and use SSN as your identifier.',
							'Follow the remaining instructions to complete the License Application',
						]}
						renderItem={(item) => <List.Item>{item}</List.Item>}
					/>
				</Card>
			),
		},
		{
			title: 'Step 4',
			description: 'State Manual',
			content: (
				<Card title='State Manual' bordered={false}>
					<List
						dataSource={[
							<>
								For Additional Info:{' '}
								<Link
									href='https://insurance.maryland.gov/Producer/Pages/publicadjusters.aspx'
									target='_blank'
								>
									insurance.maryland.gov
								</Link>
							</>,
						]}
						renderItem={(item) => <List.Item>{item}</List.Item>}
					/>
				</Card>
			),
		},
	],
	newjersey: [
		{
			title: 'Step 1',
			description: 'Learning Course',
			content: (
				<Card title='Complete Learning Course' bordered={false}>
					<List
						dataSource={[
							<>
								Go to{' '}
								<Link
									href='https://www.insurance-schools.com/New_Jersey_Public_Adjuster_License.aspx'
									target='_blank'
								>
									New Jersey Public Adjuster License
								</Link>
							</>,
							'Scroll to the bottom of the page and click “Add to Cart”. Create an account, and continue with course payment',
							'Use code “IAUA” for 10% off',
						]}
						renderItem={(item) => <List.Item>{item}</List.Item>}
					/>
					<Text strong>
						*This is our recommended learning course. Alternatively, you may
						obtain your own course materials to study. We also offer free
						training sessions. You will be emailed a link to our Tuesday
						Training Sessions. Keep in mind, you will NOT pass the test without
						studying!
					</Text>
				</Card>
			),
		},
		{
			title: 'Step 2',
			description: 'Pass License Test',
			content: (
				<Card title='Pass License Test' bordered={false}>
					<List
						dataSource={[
							<>
								Go to{' '}
								<Link
									href='https://candidate.psiexams.com/catalog/fti_agency_license_details.jsp?testid=1646'
									target='_blank'
								>
									candidate.psiexams.com
								</Link>
							</>,
							'Create an account and complete the exam. Exam may be taken either online or in-person at a testing center',
						]}
						renderItem={(item) => <List.Item>{item}</List.Item>}
					/>
				</Card>
			),
		},
		{
			title: 'Step 3',
			description: 'State Application',
			content: (
				<Card title='State Application' bordered={false}>
					<List
						dataSource={[
							<>
								Once you have passed the exam, you can apply for a Public
								Adjuster's License here:{' '}
								<Link href='https://nipr.com' target='_blank'>
									nipr.com
								</Link>
							</>,
							'Scroll down, and select "Apply for a New License", then "Go to the Online Application". Choose "Individual" and use SSN as your identifier.',
							'Follow the remaining instructions to complete the License Application',
						]}
						renderItem={(item) => <List.Item>{item}</List.Item>}
					/>
				</Card>
			),
		},
	],
	pennsylvania: [
		{
			title: 'Step 1',
			description: 'Learning Course',
			content: (
				<Card title='Complete Learning Course' bordered={false}>
					<List
						dataSource={[
							<>
								Go to{' '}
								<Link
									href='https://www.insurance-schools.com/Pennsylvania_Public_Adjuster_Course.aspx'
									target='_blank'
								>
									Pennsylvania Public Adjuster Course
								</Link>
							</>,
							'Scroll to the bottom of the page and click “Add to Cart”. Create an account, and continue with course payment',
							'Use code “IAUA” for 10% off',
						]}
						renderItem={(item) => <List.Item>{item}</List.Item>}
					/>
					<Text strong>
						*This is our recommended learning course. Alternatively, you may
						obtain your own course materials to study. We also offer free
						training sessions. You will be emailed a link to our Tuesday
						Training Sessions. Keep in mind, you will NOT pass the test without
						studying!
					</Text>
				</Card>
			),
		},
		{
			title: 'Step 2',
			description: 'Pass License Test',
			content: (
				<Card title='Pass License Test' bordered={false}>
					<List
						dataSource={[
							<>
								Go to{' '}
								<Link
									href='https://candidate.psiexams.com/catalog/fti_agency_license_details.jsp?fromwhere=findtest&testid=4197'
									target='_blank'
								>
									candidate.psiexams.com
								</Link>
							</>,
							'Create an account and complete the exam. Exam may be taken either online or in-person at a testing center',
						]}
						renderItem={(item) => <List.Item>{item}</List.Item>}
					/>
				</Card>
			),
		},
		{
			title: 'Step 3',
			description: 'State Application',
			content: (
				<Card title='State Application' bordered={false}>
					<List
						dataSource={[
							<>
								Once you have passed the exam, you can apply for a Public
								Adjuster's License here:{' '}
								<Link href='https://nipr.com' target='_blank'>
									nipr.com
								</Link>
							</>,
							'Scroll down, and select "Apply for a New License", then "Go to the Online Application". Choose "Individual" and use SSN as your identifier.',
							'Follow the remaining instructions to complete the License Application',
						]}
						renderItem={(item) => <List.Item>{item}</List.Item>}
					/>
				</Card>
			),
		},
	],
	southcarolina: [
		{
			title: 'Step 1',
			description: 'Learning Course',
			content: (
				<Card title='Complete Learning Course' bordered={false}>
					<List
						dataSource={[
							<>
								Go to{' '}
								<Link
									href='https://www.amazon.com/Claims-Adjuster-Secrets-Study-Guide/dp/1609713605/ref=sr_1_3?crid=2UWG3G1S1C8OJ&keywords=mometrix+claims+adjuster&qid=1655838620&sprefix=mometrix+claims+adjuste%2Caps%2C157&sr=8-3&ufe=app_do%3Aamzn1.fos.08f69ac3-fd3d-4b88-bca2-8997e41410bb'
									target='_blank'
								>
									Mometrix Claims Adjuster
								</Link>
							</>,
							'We recommend the “Mometrix Claims Adjuster Test Review”',
							'State Law regarding Public Adjusting additionally needs to be studied, as it is not covered in this material',
						]}
						renderItem={(item) => <List.Item>{item}</List.Item>}
					/>
					<Text strong>
						*This is our recommended learning course. Alternatively, you may
						obtain your own course materials to study. We also offer free
						training sessions. You will be emailed a link to our Tuesday
						Training Sessions. Keep in mind, you will NOT pass the test without
						studying!
					</Text>
				</Card>
			),
		},
		{
			title: 'Step 2',
			description: 'Pass License Test',
			content: (
				<Card title='Pass License Test' bordered={false}>
					<List
						dataSource={[
							<>
								Go to{' '}
								<Link
									href='https://candidate.psiexams.com/catalog/fap_test_details.jsp?testid=2954&prev_page=/catalog/fap_test_catalog_details.jsp'
									target='_blank'
								>
									candidate.psiexams.com
								</Link>
							</>,
							'Create an account and complete the exam. Exam may be taken either online or in-person at a testing center',
						]}
						renderItem={(item) => <List.Item>{item}</List.Item>}
					/>
				</Card>
			),
		},
		{
			title: 'Step 3',
			description: 'State Application',
			content: (
				<Card title='State Application' bordered={false}>
					<List
						dataSource={[
							<>
								Once you have passed the exam, you can apply for a Public
								Adjuster's License here:{' '}
								<Link href='https://nipr.com' target='_blank'>
									nipr.com
								</Link>
							</>,
							'Scroll down, and select "Apply for a New License", then "Go to the Online Application". Choose "Individual" and use SSN as your identifier.',
							'Follow the remaining instructions to complete the License Application',
						]}
						renderItem={(item) => <List.Item>{item}</List.Item>}
					/>
				</Card>
			),
		},
	],
	texas: [
		{
			title: 'Step 1',
			description: 'Learning Course',
			content: (
				<Card title='Complete Learning Course' bordered={false}>
					<List
						dataSource={[
							<>
								Go to{' '}
								<Link
									href='https://www.insurance-schools.com/Texas_Public_Adjuster_License_Course.aspx'
									target='_blank'
								>
									Texas Public Adjuster License Course
								</Link>
							</>,
							'Scroll to the bottom of the page and click “Add to Cart”. Create an account, and continue with course payment',
							'Use code “IAUA” for 10% off',
						]}
						renderItem={(item) => <List.Item>{item}</List.Item>}
					/>
					<Text strong>
						*This is our recommended learning course. Alternatively, you may
						obtain your own course materials to study. We also offer free
						training sessions. You will be emailed a link to our Tuesday
						Training Sessions. Keep in mind, you will NOT pass the test without
						studying!
					</Text>
				</Card>
			),
		},
		{
			title: 'Step 2',
			description: 'Pass License Test',
			content: (
				<Card title='Pass License Test' bordered={false}>
					<List
						dataSource={[
							<>
								Go to{' '}
								<Link
									href='https://home.pearsonvue.com/tx/insurance'
									target='_blank'
								>
									home.pearsonvue.com
								</Link>
							</>,
							'Create an account and complete the exam. Exam may be taken either online or in-person at a testing center',
						]}
						renderItem={(item) => <List.Item>{item}</List.Item>}
					/>
				</Card>
			),
		},
		{
			title: 'Step 3',
			description: 'State Application',
			content: (
				<Card title='State Application' bordered={false}>
					<List
						dataSource={[
							<>
								Once you have passed the exam, you can apply for a Public
								Adjuster's License here:{' '}
								<Link
									href='https://www.sircon.com/products/apply.jsp'
									target='_blank'
								>
									www.sircon.com
								</Link>
							</>,
							'Scroll down, and select "Apply for a New License", then "Go to the Online Application". Choose "Individual" and use SSN as your identifier.',
							'Follow the remaining instructions to complete the License Application',
						]}
						renderItem={(item) => <List.Item>{item}</List.Item>}
					/>
				</Card>
			),
		},
		{
			title: 'Step 4',
			description: 'State Manual',
			content: (
				<Card title='State Manual' bordered={false}>
					<List
						dataSource={[
							<>
								The state provides a detailed instruction manual as well:{' '}
								<Link
									href='https://home.pearsonvue.com/getattachment/990f4131-0630-4715-bdf4-5193ebcff8c2/Texas%20Department%20of%20Insurance%20Licensing%20Candidate%20Handbook.aspx'
									target='_blank'
								>
									Texas Department of Insurance Licensing Candidate Handbook
								</Link>
							</>,
						]}
						renderItem={(item) => <List.Item>{item}</List.Item>}
					/>
				</Card>
			),
		},
	],
	virginia: [
		{
			title: 'Step 1',
			description: 'Learning Course',
			content: (
				<Card title='Complete Learning Course' bordered={false}>
					<List
						dataSource={[
							<>
								Go to{' '}
								<Link
									href='https://www.amazon.com/Claims-Adjuster-Secrets-Study-Guide/dp/1609713605/ref=sr_1_3?crid=2UWG3G1S1C8OJ&keywords=mometrix+claims+adjuster&qid=1655838620&sprefix=mometrix+claims+adjuste%2Caps%2C157&sr=8-3&ufe=app_do%3Aamzn1.fos.08f69ac3-fd3d-4b88-bca2-8997e41410bb'
									target='_blank'
								>
									Claims Adjuster Secrets Study Guide
								</Link>
							</>,
							'We recommend the “Mometrix Claims Adjuster Test Review”',
							'State Law regarding Public Adjusting additionally needs to be studied, as it is not covered in this material',
						]}
						renderItem={(item) => <List.Item>{item}</List.Item>}
					/>
					<Text strong>
						*This is our recommended learning course. Alternatively, you may
						obtain your own course materials to study. We also offer free
						training sessions. You will be emailed a link to our Tuesday
						Training Sessions. Keep in mind, you will NOT pass the test without
						studying!
					</Text>
				</Card>
			),
		},
		{
			title: 'Step 2',
			description: 'Pass License Test',
			content: (
				<Card title='Pass License Test' bordered={false}>
					<List
						dataSource={[
							<>
								Go to{' '}
								<Link
									href='https://proscheduler.prometric.com/scheduling/scheduleappointment'
									target='_blank'
								>
									proscheduler.prometric.com
								</Link>
							</>,
							'Choose “Virginia Department of Insurance” as the Test Sponsor and Program.',
							'Create an account and complete the exam. Exam may be taken either online or in-person at a testing center',
							<>
								Here is an overview of the exam:{' '}
								<Link
									href='https://www.prometric.com/sites/default/files/2022-03/1108-_public_adjuster_3.1.22.pdf'
									target='_blank'
								>
									www.prometric.com
								</Link>
							</>,
						]}
						renderItem={(item) => <List.Item>{item}</List.Item>}
					/>
				</Card>
			),
		},
		{
			title: 'Step 3',
			description: 'State Application',
			content: (
				<Card title='State Application' bordered={false}>
					<List
						dataSource={[
							<>
								Once you have passed the exam, you can apply for a Public
								Adjuster's License here:{' '}
								<Link href='https://nipr.com' target='_blank'>
									nipr.com
								</Link>
							</>,
							'Scroll down, and select "Apply for a New License", then "Go to the Online Application". Choose "Individual" and use SSN as your identifier.',
							'Follow the remaining instructions to complete the License Application',
						]}
						renderItem={(item) => <List.Item>{item}</List.Item>}
					/>
				</Card>
			),
		},
		{
			title: 'Step 4',
			description: 'State Manual',
			content: (
				<Card title='State Manual' bordered={false}>
					<List
						dataSource={[
							<>
								For Additional Info:{' '}
								<Link
									href='https://www.prometric.com/sites/default/files/2020-12/INSVA%20CIB%20FINAL%201.1.21.pdf'
									target='_blank'
								>
									www.prometric.com
								</Link>
							</>,
						]}
						renderItem={(item) => <List.Item>{item}</List.Item>}
					/>
				</Card>
			),
		},
	],
};
