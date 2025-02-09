import React, { useRef, useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';

const Contact: React.FC = () => {
	const form = useRef<HTMLFormElement>(null);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<{
		type: 'success' | 'error' | null;
		message: string;
	}>({ type: null, message: '' });

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!form.current) return;

		setIsSubmitting(true);
		setSubmitStatus({ type: null, message: '' });

		try {
			const formData = {
				name: form.current.user_name.value,
				email: form.current.user_email.value,
				subject: form.current.subject.value,
				message: form.current.message.value,
			};

			const response = await fetch('http://localhost:5001/api/send-email', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			const data = await response.json();

			if (response.ok) {
				setSubmitStatus({
					type: 'success',
					message: 'Thank you! Your message has been sent successfully.',
				});
				form.current.reset();
			} else {
				throw new Error(data.message || 'Failed to send email');
			}
		} catch (error: any) {
			console.error('Email error:', error);
			setSubmitStatus({
				type: 'error',
				message:
					'Sorry, something went wrong. Please try again later or contact me directly at routpareshkumar737@gmail.com',
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section id="contact" className="py-20 bg-white">
			<div className="container mx-auto px-6">
				<h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>

				<div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
					{/* Contact Information */}
					<div className="space-y-8">
						<div className="text-center md:text-left">
							<h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
							<p className="text-gray-600 mb-8">
								Feel free to reach out to me for any questions or opportunities.
							</p>
						</div>

						<div className="space-y-4">
							<a
								href="mailto:routpareshkumar737@gmail.com"
								className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
								<FaEnvelope className="text-2xl text-blue-600 mr-4" />
								<div>
									<p className="font-semibold">Email</p>
									<p className="text-gray-600">routpareshkumar737@gmail.com</p>
								</div>
							</a>

							<a
								href="tel:+918917399664"
								className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
								<FaPhone className="text-2xl text-blue-600 mr-4" />
								<div>
									<p className="font-semibold">Phone</p>
									<p className="text-gray-600">91 8917399664</p>
								</div>
							</a>

							<div className="flex justify-center md:justify-start space-x-4 pt-4">
								<a
									href="https://www.linkedin.com/in/paresh-kumar-rout-333246188/"
									target="_blank"
									rel="noopener noreferrer"
									className="text-3xl text-blue-600 hover:text-blue-700 transition-colors">
									<FaLinkedin />
								</a>
								<a
									href="https://github.com/Routparesh"
									target="_blank"
									rel="noopener noreferrer"
									className="text-3xl text-gray-700 hover:text-gray-900 transition-colors">
									<FaGithub />
								</a>
							</div>
						</div>
					</div>

					{/* Contact Form */}
					<form ref={form} onSubmit={handleSubmit} className="space-y-6">
						{submitStatus.type && (
							<div
								className={`p-4 rounded-lg ${
									submitStatus.type === 'success'
										? 'bg-green-100 text-green-700'
										: 'bg-red-100 text-red-700'
								}`}>
								{submitStatus.message}
							</div>
						)}

						<div>
							<label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-1">
								Name
							</label>
							<input
								type="text"
								id="user_name"
								name="user_name"
								required
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
								placeholder="Your Name"
							/>
						</div>

						<div>
							<label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-1">
								Email
							</label>
							<input
								type="email"
								id="user_email"
								name="user_email"
								required
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
								placeholder="your.email@example.com"
							/>
						</div>

						<div>
							<label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
								Subject
							</label>
							<input
								type="text"
								id="subject"
								name="subject"
								required
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
								placeholder="Subject"
							/>
						</div>

						<div>
							<label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
								Message
							</label>
							<textarea
								id="message"
								name="message"
								required
								rows={5}
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
								placeholder="Your message..."
							/>
						</div>

						<button
							type="submit"
							disabled={isSubmitting}
							className={`w-full bg-blue-600 text-white py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
								isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-blue-700'
							}`}>
							{isSubmitting ? 'Sending...' : 'Send Message'}
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;


