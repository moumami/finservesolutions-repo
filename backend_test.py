#!/usr/bin/env python3
"""
Comprehensive Backend API Testing for FinServeSolutions
Tests all API endpoints defined in the FastAPI backend
"""

import requests
import sys
import json
from datetime import datetime

class FinServeAPITester:
    def __init__(self, base_url="https://91708300-ee09-4ec0-9d30-5556b301db6f.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []

    def log_test(self, name, success, details=""):
        """Log test results"""
        self.tests_run += 1
        if success:
            self.tests_passed += 1
            print(f"✅ {name} - PASSED")
        else:
            print(f"❌ {name} - FAILED: {details}")
        
        self.test_results.append({
            "test": name,
            "success": success,
            "details": details
        })

    def test_endpoint(self, method, endpoint, expected_status=200, data=None, description=""):
        """Generic endpoint tester"""
        url = f"{self.base_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)
            elif method == 'PUT':
                response = requests.put(url, json=data, headers=headers, timeout=10)
            elif method == 'DELETE':
                response = requests.delete(url, headers=headers, timeout=10)
            
            success = response.status_code == expected_status
            
            if success:
                try:
                    response_data = response.json()
                    self.log_test(f"{method} {endpoint}", True, f"Status: {response.status_code}")
                    return True, response_data
                except:
                    self.log_test(f"{method} {endpoint}", True, f"Status: {response.status_code} (No JSON)")
                    return True, {}
            else:
                self.log_test(f"{method} {endpoint}", False, f"Expected {expected_status}, got {response.status_code}")
                return False, {}
                
        except requests.exceptions.RequestException as e:
            self.log_test(f"{method} {endpoint}", False, f"Request failed: {str(e)}")
            return False, {}

    def test_health_endpoint(self):
        """Test health check endpoint"""
        print("\n🔍 Testing Health Endpoint...")
        success, data = self.test_endpoint('GET', 'api/health')
        if success and 'status' in data:
            print(f"   Health Status: {data.get('status')}")
            print(f"   Service: {data.get('service')}")
        return success

    def test_root_endpoint(self):
        """Test root API endpoint"""
        print("\n🔍 Testing Root API Endpoint...")
        success, data = self.test_endpoint('GET', 'api')
        if success and 'message' in data:
            print(f"   Message: {data.get('message')}")
            print(f"   Version: {data.get('version')}")
            print(f"   Available endpoints: {len(data.get('endpoints', []))}")
        return success

    def test_projects_endpoints(self):
        """Test all project-related endpoints"""
        print("\n🔍 Testing Projects Endpoints...")
        
        # Test GET all projects
        success, projects = self.test_endpoint('GET', 'api/projects')
        if not success:
            return False
            
        print(f"   Found {len(projects)} projects")
        
        # Test GET specific project
        if projects and len(projects) > 0:
            project_id = projects[0].get('id')
            success, project = self.test_endpoint('GET', f'api/projects/{project_id}')
            if success:
                print(f"   Retrieved project: {project.get('title', 'Unknown')}")
        
        # Test POST new project
        new_project = {
            "title": "Test Project",
            "description": "A test project for API validation",
            "tech": ["Python", "FastAPI", "Testing"],
            "image": "https://example.com/test-image.jpg"
        }
        success, created_project = self.test_endpoint('POST', 'api/projects', 201, new_project)
        if success:
            print(f"   Created project with ID: {created_project.get('id')}")
            
        # Test GET non-existent project (should return 404)
        self.test_endpoint('GET', 'api/projects/non-existent-id', 404)
        
        return True

    def test_blog_endpoints(self):
        """Test all blog-related endpoints"""
        print("\n🔍 Testing Blog Endpoints...")
        
        # Test GET all blog posts
        success, posts = self.test_endpoint('GET', 'api/blog')
        if not success:
            return False
            
        print(f"   Found {len(posts)} blog posts")
        
        # Test GET specific blog post
        if posts and len(posts) > 0:
            post_id = posts[0].get('id')
            success, post = self.test_endpoint('GET', f'api/blog/{post_id}')
            if success:
                print(f"   Retrieved post: {post.get('title', 'Unknown')}")
        
        # Test POST new blog post
        new_post = {
            "title": "Test Blog Post",
            "excerpt": "This is a test blog post for API validation",
            "content": "Full content of the test blog post...",
            "read_time": "3 min read"
        }
        success, created_post = self.test_endpoint('POST', 'api/blog', 201, new_post)
        if success:
            print(f"   Created blog post with ID: {created_post.get('id')}")
            
        # Test GET non-existent post (should return 404)
        self.test_endpoint('GET', 'api/blog/non-existent-id', 404)
        
        return True

    def test_contact_endpoints(self):
        """Test contact-related endpoints"""
        print("\n🔍 Testing Contact Endpoints...")
        
        # Test POST contact message
        contact_message = {
            "name": "Test User",
            "email": "test@example.com",
            "subject": "API Testing",
            "message": "This is a test message for API validation"
        }
        success, response = self.test_endpoint('POST', 'api/contact', 200, contact_message)
        if success:
            print(f"   Contact message status: {response.get('status')}")
            print(f"   Contact ID: {response.get('contact_id')}")
        
        # Test GET contact messages (admin endpoint)
        success, messages = self.test_endpoint('GET', 'api/contact')
        if success:
            print(f"   Retrieved {len(messages)} contact messages")
            
        return True

    def test_services_endpoint(self):
        """Test services endpoint"""
        print("\n🔍 Testing Services Endpoint...")
        success, services = self.test_endpoint('GET', 'api/services')
        if success:
            print(f"   Found {len(services)} services")
            for service in services:
                print(f"   - {service.get('title')}: {service.get('price_range')}")
        return success

    def test_stats_endpoint(self):
        """Test statistics endpoint"""
        print("\n🔍 Testing Statistics Endpoint...")
        success, stats = self.test_endpoint('GET', 'api/stats')
        if success:
            print(f"   Projects completed: {stats.get('projects_completed')}")
            print(f"   Blog posts: {stats.get('blog_posts')}")
            print(f"   Services offered: {stats.get('services_offered')}")
            print(f"   Years experience: {stats.get('years_experience')}")
            print(f"   Clients served: {stats.get('clients_served')}")
            print(f"   Uptime: {stats.get('uptime_percentage')}%")
        return success

    def run_all_tests(self):
        """Run comprehensive API test suite"""
        print("🚀 Starting FinServeSolutions API Test Suite")
        print(f"🌐 Testing against: {self.base_url}")
        print("=" * 60)
        
        # Test all endpoints
        test_methods = [
            self.test_health_endpoint,
            self.test_root_endpoint,
            self.test_projects_endpoints,
            self.test_blog_endpoints,
            self.test_contact_endpoints,
            self.test_services_endpoint,
            self.test_stats_endpoint
        ]
        
        for test_method in test_methods:
            try:
                test_method()
            except Exception as e:
                print(f"❌ Test method {test_method.__name__} failed with exception: {str(e)}")
        
        # Print final results
        print("\n" + "=" * 60)
        print("📊 TEST RESULTS SUMMARY")
        print("=" * 60)
        print(f"Total tests run: {self.tests_run}")
        print(f"Tests passed: {self.tests_passed}")
        print(f"Tests failed: {self.tests_run - self.tests_passed}")
        print(f"Success rate: {(self.tests_passed/self.tests_run*100):.1f}%" if self.tests_run > 0 else "0%")
        
        if self.tests_passed == self.tests_run:
            print("🎉 ALL TESTS PASSED! Backend API is working correctly.")
            return 0
        else:
            print("⚠️  Some tests failed. Check the details above.")
            return 1

def main():
    """Main test execution"""
    tester = FinServeAPITester()
    return tester.run_all_tests()

if __name__ == "__main__":
    sys.exit(main())